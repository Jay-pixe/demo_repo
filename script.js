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


//About Us
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var leftContent = document.querySelector(".left-content");
        var rightContent = document.querySelector(".right-content");
        var section = document.querySelector(".section");

        var sectionPosition = section.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        // Adjust the trigger point as needed
        var triggerPoint = windowHeight * 0.6;

        if (sectionPosition.top < triggerPoint && sectionPosition.bottom >= triggerPoint) {
            leftContent.style.transform = "translateX(0)";
            leftContent.style.opacity = 1;

            rightContent.style.transform = "translateX(0)";
            rightContent.style.opacity = 1;
        } else {
            leftContent.style.transform = "translateX(-100%)";
            leftContent.style.opacity = 0;

            rightContent.style.transform = "translateX(100%)";
            rightContent.style.opacity = 0;
        }
    });
});
