var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(index) {
    showSlides(slideIndex += index);
};

function currentSlide(index) {
    showSlides(slideIndex = index);
}

function showSlides(index) {
    var i;

    //Get the slides
    var slides = document.getElementsByClassName("slide-logo");

    //Check for wraping around
    if (index > slides.length) {
        slideIndex = 1;
    }

    if (index < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";


}


