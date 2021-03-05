let mobileMenu = document.querySelector(".nav-mobile-menu");// создаем пер. для меню мобилки.
let mainMenu = document.querySelector(".navigation");// создаем пер. для меню.

 mobileMenu.addEventListener("click",function() {
     mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu"); 
    }
})


// slider swiper
new Swiper('.image-slider',{
    // arrows
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        clickable: true,
        // Динамические буллеты
        dynamicBullets: true,
    },
    
    // Автовысота
    // autoHeight: true,
});  
    