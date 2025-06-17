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

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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

// Auto-scroll particles
setInterval(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        if (Math.random() > 0.98) {
            particle.style.background = Math.random() > 0.5 ? '#ff00ff' : '#00ffff';
        }
    });
}, 100);

// Initialize utilities when page loads
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    console.log('Utilities initialized');
}); 