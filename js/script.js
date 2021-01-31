$(document).ready(function() {
    $('.slider-insights, .slider-events').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                dots: true,
              }
            },
        ],
    });

    $('.sp-menu-bar').click(function(e){
        e.preventDefault();
        if($('.fix-menu').hasClass('hide')){
            $('.fix-menu').removeClass('hide');
            $('body').css('overflow','hidden');
        } else {
            $('.fix-menu').addClass('hide');
            $('body').removeAttr('style');
        }
    });
});