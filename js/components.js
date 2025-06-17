// Utility to get correct absolute path to components folder for GitHub Pages
function getComponentPath(componentFile) {
    return '/rendersecurity.com/components/' + componentFile;
}

// Utility to get correct base path for links
function getBasePath() {
    // Get the current path, e.g. /rendersecurity.com/pages/compliance-management.html
    const path = window.location.pathname;
    // If in a subfolder (e.g. /rendersecurity.com/pages/...), go up one level
    if (/\/pages\//.test(path)) {
        return '../';
    }
    // Otherwise, we're at the root
    return '';
}

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
    await loadComponent('header-container', getComponentPath('header.html'), () => {
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
        // Dynamically update header nav links
        const base = getBasePath();
        document.querySelector('.nav-home').setAttribute('href', base + 'index.html#home');
        document.querySelector('.nav-services').setAttribute('href', base + 'index.html#services');
        document.querySelector('.nav-about').setAttribute('href', base + 'index.html#about');
        document.querySelector('.nav-contact').setAttribute('href', base + 'index.html#contact');
        document.querySelector('.nav-compliance').setAttribute('href', base + 'pages/compliance-management.html');
        document.querySelector('.nav-training').setAttribute('href', base + 'pages/security-training.html');
        document.querySelector('.nav-web').setAttribute('href', base + 'pages/web-design.html');
        document.querySelector('.nav-maintenance').setAttribute('href', base + 'pages/website-maintenance.html');
        document.querySelector('.nav-ai').setAttribute('href', base + 'pages/ai-integration.html');
    });
    await loadComponent('footer-container', getComponentPath('footer.html'), () => {
        // Dynamically update footer links
        const base = getBasePath();
        document.querySelector('.footer-home').setAttribute('href', base + 'index.html#home');
        document.querySelector('.footer-services').setAttribute('href', base + 'index.html#services');
        document.querySelector('.footer-about').setAttribute('href', base + 'index.html#about');
        document.querySelector('.footer-contact').setAttribute('href', base + 'index.html#contact');
    });
});