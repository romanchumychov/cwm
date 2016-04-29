$(document).ready(function() {

    $('.js-menu-btn').click(function() {
        var navigation = $('.navigation'),
            navWidth = navigation.width();
        $(this).toggleClass('close');
        if ($(this).hasClass('close')) {
            navigation.css({'left': '0px'});
            $('body').addClass('nav-open');
        } else {
            navigation.css({'left': -navWidth + 'px'});
            $('body').removeClass('nav-open');
        }
    });




    if ($(window).width() < 768) {
        $('.aside .head-text').each(function() {
            $(this).click(function() {
                $(this).next('ul').slideToggle();
            });
        });
    }


});