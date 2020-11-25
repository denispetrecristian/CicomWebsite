document.getElementById("button-modal").addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});
document.getElementById("button-modal-second").addEventListener('click', function() {
    document.querySelector('.bg-modal-tort').style.display = 'flex';
});



$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        document.querySelector('.bg-modal').style.display = 'none';
    }
})

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        document.querySelector('.bg-modal-tort').style.display = 'none';
    }
})

$(".bg-modal").click(function(e) {
    if (e.target.id == "modal-content-vafa" || $(e.target).parents("#modal-content-vafa").length) {
        document.querySelector('.bg-modal').style.display = 'flex';
    } else {
        document.querySelector('.bg-modal').style.display = 'none';
    }
});

$(".bg-modal-tort").click(function(e) {
    if (e.target.id == "modal-content-tort" || $(e.target).parents("#modal-content-tort").length) {
        document.querySelector('.bg-modal-tort').style.display = 'flex';
    } else {
        document.querySelector('.bg-modal-tort').style.display = 'none';
    }
});