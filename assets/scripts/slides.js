let swiperMain = new Swiper('.swiper_galeria_main', {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        768 :{
            slidesPerView: 2
        }
    },
    navigation: {
        prevEl: '.galeria__control--prev',
        nextEl: '.galeria__control--next',
    }

});

let swiperDepartamentos = new Swiper('.departamentos__swiper', {
    loop: true,
    navigation: {
        prevEl: '.departamentos__controls__slide--prev',
        nextEl: '.departamentos__controls__slide--next'
    }
});

let swiperMasNostros = new Swiper('.swiper__masnosotros', {
    loop: true,
    navigation: {
        prevEl: '.masnosotros__controls--prev',
        nextEl: '.masnosotros__controls--next'
    }
});