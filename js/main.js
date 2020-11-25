jQuery(function($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.hidden');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('hidden').addClass('appear-from-up');
            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});

jQuery(function($) {
    var fadeInAnimation = function() {
        var offsetFade = $(window).scrollTop() + $(window).height(),
            $fadeInAnimatables = $('.hidden-fade-in');

        if ($fadeInAnimatables.length == 0) {
            $(window).off('scroll', fadeInAnimation);
        }

        $fadeInAnimatables.each(function(i) {
            var $animatableFade = $(this);
            console.log('This is me. this is real')
            if (($animatableFade.offset().top + $animatableFade.height() - 0) < offsetFade) {
                $animatableFade.removeClass('hidden-fade-in').addClass('fade-in');
            }
        })

    }
    $(window).on('scroll', fadeInAnimation);
    $(window).trigger('scroll');
})


//Check if the text-write animation is finished


// element.addEventListener("")

// $(".text-write").click(function() {
//     $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
//         function(event) {
//             $(this).addClass('finished-text-write');
//         });
// });