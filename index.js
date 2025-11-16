// Slick initialization.

$(document).ready(function(){
    $('.fade').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1024, // 👈 при ширине окна меньше 992px
                settings: {
                    slidesToShow: 2 // например, планшет
                }
            },
            {
                breakpoint: 768, // 👈 при ширине окна меньше 768px
                settings: {
                    slidesToShow: 1, // мобильная версия — 1 слайд
                    dots: false
                }
            }
        ]
    });
});

// Найдём ссылку внутри label
const privacyLink = document.querySelector('#myLabel a');

// Останавливаем всплытие клика, чтобы не трогался чекбокс
privacyLink.addEventListener('click', function(event) {
    event.stopPropagation(); // предотвращает переключение чекбокса
    // ссылка всё равно откроется
});