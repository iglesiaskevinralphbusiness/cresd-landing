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
});