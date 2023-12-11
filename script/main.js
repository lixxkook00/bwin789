$(document).ready(function() {
    $('.menu-btn').click(function() {
        $('.menu-bg').fadeIn();
        $('.menu').show("slide", {
            direction: "right"
        }, 300);
    })
    $('.menu_back').click(function() {
        $('.menu').hide("slide", {
            direction: "right"
        }, 300);
        $('.menu-bg').fadeOut();
    })

    $(document).click(function(event) {
        var clickover = $(event.target);
        if (!clickover.parents(".menu").length) {
            if (!clickover.hasClass('menu-btn')) {
                $('.menu').hide("slide", {
                    direction: "right"
                }, 300);
                $('.menu-bg').fadeOut();
            }
        }
    });
    $('.mob-lc-btn').click(function() {
        $(this).parents('.mob-menu-item').siblings('.mob-menu-item').children('.mob-slide-con').slideUp();
        $(this).siblings(".mob-slide-con").slideToggle();
    })
})
