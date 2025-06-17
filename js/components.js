// Function to load HTML components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Load components when the DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('components/header.html', 'header-container');
    await loadComponent('components/footer.html', 'footer-container');
}); 