// import { initializeApp } from 'firebase/app';
// import { getFunctions, httpsCallable } from 'firebase/functions';
// import { firebaseConfig } from './firebase-config';

// const app = initializeApp(firebaseConfig);
// const functions = getFunctions(app, 'us-central1');

// Global AI response function - defined first
function generateAdvancedResponse(input) {
    const lowercaseInput = input.toLowerCase();

    // Malware and virus issues
    if (lowercaseInput.includes('malware') || lowercaseInput.includes('virus') || lowercaseInput.includes('trojan') || lowercaseInput.includes('infected')) {
        return 'Malware incidents require immediate containment and remediation:\n\n**Immediate Actions:**\n• Isolate infected systems from the network\n• Preserve forensic evidence before cleaning\n• Run comprehensive malware scans with updated signatures\n• Check for lateral movement across your environment\n\n**Professional Remediation:**\n• Deploy endpoint detection and response (EDR) solutions\n• Implement application whitelisting and behavioral analysis\n• Establish network segmentation to prevent future spread\n• Conduct threat hunting to identify persistent threats\n\n**Prevention Strategy:**\n• Next-generation antivirus with AI-powered detection\n• Email security gateways with sandboxing\n• User awareness training on safe computing practices\n• Regular vulnerability assessments and patch management\n\nRender Security provides 24/7 malware incident response and can implement comprehensive endpoint protection. Contact us immediately if you\'re experiencing an active infection.';
    }

    // Phishing and social engineering
    if (lowercaseInput.includes('phishing') || lowercaseInput.includes('suspicious email') || lowercaseInput.includes('social engineering') || lowercaseInput.includes('spam')) {
        return 'Phishing attacks are the #1 attack vector. Here\'s your professional defense strategy:\n\n**Immediate Response:**\n• Do not click links or download attachments from suspicious emails\n• Report phishing emails to your IT security team\n• Check for credential compromise if clicked\n• Scan systems for potential malware installation\n\n**Email Security Implementation:**\n• Advanced email filtering with AI-powered threat detection\n• DMARC, SPF, and DKIM authentication protocols\n• Email encryption for sensitive communications\n• Quarantine and sandbox suspicious attachments\n\n**User Training Program:**\n• Monthly phishing simulation campaigns\n• Real-time training when users fail simulations\n• Security awareness workshops and best practices\n• Incident reporting procedures and incentives\n\n**Success Metrics:** Target <5% phishing click rate, 90%+ reporting rate\n\nRender Security offers comprehensive anti-phishing solutions including advanced email security and user training programs. Would you like a phishing vulnerability assessment?';
    }

    // Password and authentication issues
    if (lowercaseInput.includes('password') || lowercaseInput.includes('authentication') || lowercaseInput.includes('login') || lowercaseInput.includes('mfa') || lowercaseInput.includes('two-factor')) {
        return 'Strong authentication is your first line of defense:\n\n**Password Security Best Practices:**\n• Implement minimum 12-character complex passwords\n• Deploy enterprise password managers (1Password, Bitwarden)\n• Enforce password rotation policies (90-day cycles)\n• Prohibit password reuse across accounts\n\n**Multi-Factor Authentication (MFA):**\n• Deploy MFA for all critical systems and cloud services\n• Use authenticator apps or hardware tokens (avoid SMS)\n• Implement adaptive authentication based on risk factors\n• Backup authentication methods for account recovery\n\n**Advanced Identity Solutions:**\n• Single Sign-On (SSO) with centralized identity management\n• Privileged Access Management (PAM) for admin accounts\n• Zero-trust identity verification with behavioral analytics\n• Just-in-time access provisioning\n\n**Industry Standards:** 99.9% of account compromises are prevented with proper MFA\n\nRender Security can audit your current authentication systems and implement enterprise-grade identity management solutions. What authentication challenges are you facing?';
    }

    // Network security and firewall issues
    if (lowercaseInput.includes('network') || lowercaseInput.includes('firewall') || lowercaseInput.includes('router') || lowercaseInput.includes('wifi') || lowercaseInput.includes('intrusion')) {
        return 'Network security requires layered defense architecture:\n\n**Firewall Optimization:**\n• Deploy next-generation firewalls with deep packet inspection\n• Implement application-aware security policies\n• Enable SSL/TLS inspection for encrypted traffic\n• Regular rule optimization and policy audits\n\n**Network Segmentation:**\n• Create VLANs for different business functions\n• Implement microsegmentation for critical assets\n• Deploy zero-trust network access (ZTNA)\n• Monitor east-west traffic for lateral movement\n\n**Wireless Security:**\n• WPA3 encryption with enterprise authentication\n• Guest network isolation and bandwidth controls\n• Rogue access point detection and prevention\n• Regular wireless security assessments\n\n**Monitoring & Detection:**\n• 24/7 network monitoring with SIEM integration\n• Intrusion detection/prevention systems (IDS/IPS)\n• Network traffic analysis and behavioral baselines\n• Automated threat response and containment\n\nRender Security specializes in enterprise network security architecture. We can conduct a comprehensive network assessment and design secure, scalable solutions for your infrastructure.';
    }

    // Backup and recovery
    if (lowercaseInput.includes('backup') || lowercaseInput.includes('recovery') || lowercaseInput.includes('disaster') || lowercaseInput.includes('ransomware')) {
        return 'Business continuity requires robust backup and recovery strategies:\n\n**3-2-1 Backup Strategy:**\n• 3 copies of critical data (primary + 2 backups)\n• 2 different storage media types\n• 1 offsite/cloud backup copy\n• Immutable backup storage to prevent ransomware encryption\n\n**Ransomware Protection:**\n• Air-gapped backup systems with network isolation\n• Regular backup integrity testing and restoration drills\n• Version control with point-in-time recovery capabilities\n• Automated backup monitoring and alerting\n\n**Disaster Recovery Planning:**\n• Recovery Time Objective (RTO): Target <4 hours for critical systems\n• Recovery Point Objective (RPO): Target <1 hour data loss\n• Business impact analysis and system prioritization\n• Regular DR testing and plan updates\n\nRender Security can design and implement comprehensive backup and disaster recovery solutions. Have you tested your current backup systems recently?';
    }

    // Compliance
    if (lowercaseInput.includes('compliance') || lowercaseInput.includes('gdpr') || lowercaseInput.includes('hipaa') || lowercaseInput.includes('pci') || lowercaseInput.includes('soc')) {
        return 'Regulatory compliance requires systematic approach and ongoing management:\n\n**SOC 2 Compliance:**\n• Gap analysis against 5 Trust Service Criteria\n• Control implementation (6-12 months)\n• Independent auditor engagement\n• Estimated cost: $75,000-$150,000 annually\n\n**HIPAA Security Assessment:**\n• Privacy Impact Assessment\n• Administrative, physical, and technical safeguards\n• Employee training and BAA management\n• Breach response planning\n\n**GDPR Compliance:**\n• Data mapping and classification\n• Privacy by design implementation\n• Data subject rights automation\n• Breach notification procedures within 72 hours\n\nRender Security has certified compliance specialists for all major frameworks. Which regulatory requirements apply to your organization?';
    }

    // General greetings
    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput.includes('hey')) {
        return 'Hello! I\'m your AI Security Consultant from Render Security. I specialize in providing professional cybersecurity solutions for:\n\n• Malware and virus incidents\n• Phishing and email security\n• Network and firewall protection\n• Data backup and recovery\n• Compliance and regulatory requirements\n• Authentication and password security\n\nSimply describe your cybersecurity challenge, and I\'ll provide specific solutions and recommendations. What security issue can I help you solve today?';
    }

    // Help and capabilities
    if (lowercaseInput.includes('help') || lowercaseInput.includes('what can you do')) {
        return 'I\'m a professional cybersecurity consultant AI trained to help with:\n\n**Security Incident Response:** Malware, phishing, breaches, and emergency situations\n**Infrastructure Protection:** Firewalls, network security, endpoint protection\n**Compliance & Risk:** GDPR, HIPAA, SOC 2, risk assessments\n**Data Protection:** Backup strategies, encryption, data loss prevention\n**Identity & Access:** Authentication, password security, privileged access\n\nI provide actionable solutions with specific recommendations, timelines, and budget considerations. For highly specialized situations beyond my knowledge, I\'ll connect you directly with Render Security\'s expert consultants.\n\nWhat cybersecurity challenge would you like help with?';
    }

    // Default response for unrecognized topics
    return 'I appreciate you bringing this cybersecurity concern to my attention. While I have extensive knowledge across many security domains, your specific situation may require personalized consultation from our expert team.\n\n**For specialized assistance with your unique challenge:**\n\n📞 **Direct Consultation:** Contact Render Security\'s certified cybersecurity professionals\n• Phone: +1 (555) 123-SECURITY\n• Email: consultation@rendersecurity.com\n• Emergency Hotline: Available 24/7 for urgent security incidents\n\n💼 **What Our Experts Can Provide:**\n• Detailed technical analysis of your specific situation\n• Custom security solutions tailored to your environment\n• Hands-on implementation and ongoing support\n• Industry-specific compliance guidance\n• Emergency incident response services\n\n🎯 **Consultation Process:**\n• Free 30-minute security assessment call\n• Detailed analysis of your security requirements\n• Customized proposal with timelines and investment details\n• Implementation roadmap with measurable outcomes\n\nOur team of CISSP, CISM, and GCIH certified consultants has successfully resolved complex security challenges across diverse industries. We\'ll ensure you receive the expert guidance needed to address your specific cybersecurity concerns.\n\nWould you like me to help schedule a consultation call with one of our specialists?';
}

// Particle animation
function createParticles() {
    const bgAnimation = document.querySelector('.bg-animation');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        bgAnimation.appendChild(particle);
    }
}

// Chat functionality
function initializeChat() {
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const chatMessages = document.getElementById('chatMessages');

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            console.log('Sending message:', message);

            // Clear previous messages before adding new ones
            chatMessages.innerHTML = '';

            // Add user message
            const userDiv = document.createElement('div');
            userDiv.className = 'message user-message';
            userDiv.textContent = message;
            chatMessages.appendChild(userDiv);

            // Clear input
            chatInput.value = '';

            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Show typing indicator
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message ai-message';
            typingDiv.innerHTML = '<em>AI Security Consultant is analyzing your query...</em>';
            typingDiv.id = 'typing-indicator';
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Generate AI response
            setTimeout(() => {
                // Remove typing indicator
                const typingIndicator = document.getElementById('typing-indicator');
                if (typingIndicator) {
                    typingIndicator.remove();
                }

                const response = generateAdvancedResponse(message);
                console.log('Generated response:', response);
                const aiDiv = document.createElement('div');
                aiDiv.className = 'message ai-message';
                aiDiv.textContent = response;
                chatMessages.appendChild(aiDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1500);
        }
    }

    // Event listeners
    sendButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Send button clicked');
        sendMessage();
    });

    chatInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log('Enter pressed');
            sendMessage();
        }
    });

    chatInput.addEventListener('click', function() {
        console.log('Input clicked');
        this.focus();
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initializeChat();
    console.log('Page initialized');
});

// Auto-scroll particles
setInterval(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        if (Math.random() > 0.98) {
            particle.style.background = Math.random() > 0.5 ? '#ff00ff' : '#00ffff';
        }
    });
}, 100);

// Modal handling
const modal = document.getElementById('feedbackModal');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.querySelector('.close-modal');

function showModal(message, isSuccess = true) {
    modalMessage.textContent = message;
    modalMessage.className = isSuccess ? 'success-message' : 'error-message';
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
}

// Close modal when clicking the X or outside the modal
closeModal.onclick = hideModal;
window.onclick = (event) => {
    if (event.target === modal) {
        hideModal();
    }
};

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (!nameInput || !emailInput || !messageInput) {
            console.error('One or more form elements not found');
            return;
        }

        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Removed Cloud Function call for now
        // const handleContactForm = httpsCallable(functions, 'handleContactForm');
        // try {
        //   const result = await handleContactForm({ name, email, message });
        //   console.log('Function result:', result);
        // } catch (error) {
        //   console.error("Error details:", error);
        // }

        // For now, just log the data and show success
        console.log('Form data:', { name, email, message });
        showModal('Your message has been received! We will get back to you soon.', true);
        contactForm.reset();
    });
}