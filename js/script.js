const swiper = new Swiper('.swiper1', {
    // Optional parameters
    effect: "fade",
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique'
    }

});


const newSwiper = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    initialSlide: 3,
    slideToClickedSlide: true,
    grabCursor: true,
});


/*const partnerSwiper = new Swiper('.swiper3', {
    // Optional parameters
   /!* loop: true,
    slidesPerView: 2,
    spaceBetween: 30,*!/

    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
});*/

