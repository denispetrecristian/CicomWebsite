$(function() {
    $(".btn-link").click(function() {
        // $(this).toggleClass("active");
        var parentOne = $(this).parent();
        var granparent = $(parentOne).parent();
        parentOne.toggleClass("active");
        var neededClass = $(granparent).parent();
        $(neededClass).toggleClass("active");
        console.log(parentOne);

        for (i = 0; i < $(".card").length; i++) {

            if (!(neededClass.is($(".card").eq(i)))) {

                if ($(".card").eq(i).hasClass("active")) {

                    $(".card").eq(i).removeClass("active");
                }
            }
        }

        for (i = 0; i < $(".pos-active").length; i++) {

            if (!(parentOne.is($(".pos-active").eq(i)))) {

                if ($(".pos-active").eq(i).hasClass("active")) {

                    $(".pos-active").eq(i).removeClass("active");
                }
            }
        }
    });

});