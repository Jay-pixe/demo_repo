// Add this JavaScript for responsive navigation
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var closeBtn = document.getElementById('close-btn');
    var nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        toggleNav();
    });

    closeBtn.addEventListener('click', function () {
        toggleNav();
    });

    function toggleNav() {
        if (window.getComputedStyle(nav).display === 'none') {
            nav.style.display = 'flex';
            menuToggle.style.display = 'none';
            closeBtn.style.display = 'block';
        } else {
            nav.style.display = 'none';
            menuToggle.style.display = 'block';
            closeBtn.style.display = 'none';
        }
    }
});
