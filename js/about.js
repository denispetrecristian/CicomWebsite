jQuery(function($) {
    var doAnimation = function() {
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $(".hidden-picture");

        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimation);
        }

        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('hidden-picture').addClass('picture-animation');
            }
        })

    }

    $(window).on('scroll', doAnimation);
    $(window).trigger('scroll');
});

jQuery(function($) {
    var doTextAnimation = function() {
        var offset = $(window).scrollTop() + $(window).height().height,
            $animateText = $(".hidden-text");

        if ($animateText.length == 0) {
            $(window).off('scroll', doTextAnimation);
        }

        $animateText.each(function(i) {
            var $textAnimate = this;
            if (($textAnimate.offset().top + $textAnimate.height() - 20) < offset) {
                $textAnimate.removeClass('hidden-text').addClass('text-animate');
            }
        })
    }

    $(window).on('scroll', doTextAnimation);
    $(window).trigger('scroll');
})