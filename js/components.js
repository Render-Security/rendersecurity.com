// Function to load HTML components
async function loadComponent(elementId, componentPath, callback) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        if (typeof callback === 'function') callback();
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Load components when the DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('header-container', 'components/header.html', () => {
        // Hamburger menu toggle for mobile nav
        const hamburger = document.getElementById('hamburger-menu');
        const navLinks = document.querySelector('.nav-links');
        if (hamburger && navLinks) {
            hamburger.onclick = () => {
                navLinks.classList.toggle('active');
            };
            // Close menu when a nav link is clicked
            navLinks.querySelectorAll('a').forEach(link => {
                link.onclick = () => {
                    navLinks.classList.remove('active');
                };
            });
        }
    });
    await loadComponent('footer-container', 'components/footer.html');
}); 