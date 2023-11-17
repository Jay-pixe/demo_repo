function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slideshow img");
    let currentSlide = 0;

    function showSlide(index) {
        images[currentSlide].classList.remove("active");
        currentSlide = index;
        images[currentSlide].classList.add("active");
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % images.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + images.length) % images.length;
        showSlide(prevIndex);
    }

    setInterval(nextSlide, 5000); // Change image every 3 seconds
});
