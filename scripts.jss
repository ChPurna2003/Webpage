document.getElementById('toggleMenu').addEventListener('click', function() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
});

// Function to shrink the page based on screen width
function adjustPageSize() {
    const width = window.innerWidth;
    const body = document.body;

    if (width > 992 && width <= 1600) {
        body.style.transform = 'scale(0.9)';
        body.style.transformOrigin = 'top left';
    } else if (width >= 700 && width < 767) {
        body.style.transform = 'scale(0.8)';
        body.style.transformOrigin = 'top left';
    } else if (width >= 600 && width < 700) {
        body.style.transform = 'scale(0.75)';
        body.style.transformOrigin = 'top left';
    } else if (width <= 600) {
        body.style.transform = 'scale(0.5)';
        body.style.transformOrigin = 'top left';
    } else {
        body.style.transform = 'scale(1)';
    }
}

// Adjust page size on load and resize
window.addEventListener('load', adjustPageSize);
window.addEventListener('resize', adjustPageSize);