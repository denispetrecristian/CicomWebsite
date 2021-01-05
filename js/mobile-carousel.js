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

//Use the medium breakpoint
function resizeHandle() {
    console.log(window.innerWidth);
    if (window.innerWidth < 920) {
        showOnBigScreen();

    } else {
        showOnSmallScreen();

    }
}

function showOnSmallScreen() {
    var section_small = document.getElementById("hidden-small-carousel");
    var section_big = document.getElementById("hidden-big-carousel");

    section_small.style.display = "block";
    section_big.style.display = "none";
}

function showOnBigScreen() {
    var section_big = document.getElementById("hidden-big-carousel");
    var section_small = document.getElementById("hidden-small-carousel");

    section_big.style.display = "block";
    section_small.style.display = "none";
}

window.addEventListener('resize', resizeHandle);
window.addEventListener('DOMContentLoaded', resizeHandle);