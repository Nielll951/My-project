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

//modal
let modal = document.querySelector(".modal");
let sendMessageBtns = document.querySelector(".more-details");
let closeBtn = document.querySelector(".btn-close");

// console.log(modal);
// console.log(sendMessageBtns);
// console.log(closeBtn);

sendMessageBtns.addEventListener("click",openModal)

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e) {
    if(e.target == modal) {
        closeModal()
    }
})

//modal scroll
// console.log(window.pageYOffset)// сколько проскролили
// console.log(document.body.scrollHeight)// высота странички

function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll",showModalByScroll)// на событии scroll удалить ф. showModalByScroll.git 
    }
}

window.addEventListener("scroll",showModalByScroll);

    
    