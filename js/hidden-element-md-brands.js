function resizeHandle() {
    console.log(window.innerWidth);
    if (window.innerWidth < 757) {
        showOnBigScreen();

    } else {
        showOnSmallScreen();

    }
}

function showOnSmallScreen() {
    var section_small = document.getElementById("hidden-small-carousel");
    var section_big = document.getElementById("hidden-big-carousel");

    section_small.style.display = "flex";
    section_big.style.display = "none";
}

function showOnBigScreen() {
    var section_big = document.getElementById("hidden-big-carousel");
    var section_small = document.getElementById("hidden-small-carousel");

    section_big.style.display = "flex";
    section_small.style.display = "none";
}

window.addEventListener('resize', resizeHandle);
window.addEventListener('DOMContentLoaded', resizeHandle);