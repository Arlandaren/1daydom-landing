$(document).ready(function(){
    $('.working__box.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3, // Изменить на 1, если хочешь по одному слайду в десктопной версии
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992, // Для планшетов и ниже
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576, // Для мобильных устройств
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});