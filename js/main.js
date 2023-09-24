const headerText = document.querySelector('.header__text');
const headerSky = document.querySelector('.sky');

window.addEventListener('scroll', function () {
    let value = window.scrollY + 1000;

    headerText.style.top = value * 0.2 + 'px';
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});
