document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var closeBtn = document.getElementById('close-btn');
    var nav = document.querySelector('nav');
    var body = document.querySelector('body');

    menuToggle.addEventListener('click', function () {
        toggleNav(true);
    });

    closeBtn.addEventListener('click', function () {
        toggleNav(false);
    });

    function toggleNav(open) {
        if (open) {
            nav.style.display = 'block';
            body.classList.add('menu-open');
        } else {
            nav.style.display = 'none';
            body.classList.remove('menu-open');
        }
    }
});
