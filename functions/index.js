/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.handleContactForm = functions.region("us-central1").https.onCall(
    async (data, context) => {
      try {
      // Validate required fields
        const requiredFields = ["name", "email", "message"];
        const missingFields = requiredFields.filter((field) => !data[field]);

        if (missingFields.length > 0) {
          throw new Error(
              `Missing required fields: ${missingFields.join(", ")}`,
          );
        }

        // Create submission data with metadata
        const submissionData = {
          ...data,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          status: "new",
          processed: false,
        };

        // Store in Firestore
        const docRef = await admin
            .firestore()
            .collection("contact-submissions")
            .add(submissionData);

        // Prepare email content
        const emailContent = `
        New Contact Form Submission
        
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
        ${Object.entries(data)
      .filter(([key]) => !["name", "email", "message"].includes(key))
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")}
        
        Submission ID: ${docRef.id}
        Timestamp: ${new Date().toISOString()}
      `;

        // Send email
        await transporter.sendMail({
          from: functions.config().email.user,
          to: functions.config().email.user,
          subject: "New Contact Form Submission",
          text: emailContent,
        });

        return {
          success: true,
          message: "Form submitted successfully",
          submissionId: docRef.id,
        };
      } catch (error) {
        console.error("Error processing form submission:", error);
        throw new functions.https.HttpsError(
            "internal",
            "Error processing form submission",
            error.message,
        );
      }
    },
);
