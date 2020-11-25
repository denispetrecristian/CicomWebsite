jQuery(function($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var Check = function() {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $hoverable = $('.flip-card');

        // Unbind scroll handler if we have no animatables
        if ($hoverable.length == 0) {
            $(window).off('scroll', Check);
        }

        // Check all animatables and animate them if necessary
        $hoverable.each(function(i) {
            var $hovered = $(this);
            if (($hovered.offset().top + $hovered.height() - 20) < offset) {
                $hovered.toggleClass('active');

            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', Check);
    $(window).trigger('scroll');

});