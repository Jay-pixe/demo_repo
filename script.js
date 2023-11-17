function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var slogan = document.querySelector(".slogan");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 10000); // Change slide every 5 seconds
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}
