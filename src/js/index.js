window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
})

$(document).ready(function() {
    $('ul.catalog_tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    // $('.carousel__inner').slick({
    //     speed: 300,
    //     slidesToShow: 1,
    //     adaptiveHeight: true,
    //     prevArrow: '<button type="button" class="slick-prev"><img src="../icons/previous.svg"></button>',
    //     nextArrow: '<button type="button" class="slick-next"><img src="../icons/next.svg"></button>',
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true
    //             }
    //         },
    //         {
    //           breakpoint: 650,
    //           settings: {
    //             dots: true,
    //             infinite: true,
    //             speed: 300,
    //             slidesToShow: 1,
    //             adaptiveHeight: true,
    //             arrows:  false
    //           }
    //         }
    //     ]
    // });
});