// Add this JavaScript for responsive navigation
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        if (window.getComputedStyle(nav).display === 'none') {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
});
