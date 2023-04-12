// Get height from body
let getScrollValue = document.body.scrollTop;
console.log(getScrollValue);

// Script for navigation bar
// Configurate Swipper on bottom search box

function swipperNavbar(){
    const swiperEl = document.querySelector('#swiperNavbarItems');
    Object.assign(swiperEl, {
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
            "@0.00": {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            "@0.75": {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            "@1.00": {
                slidesPerView: 6,
                spaceBetween: 40,
            },
            "@1.50": {
                slidesPerView: 8,
                spaceBetween: 50,
            },
        },
    });

    swiperEl.initialize();
};

swipperNavbar();

