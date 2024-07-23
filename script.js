let menu = document.querySelector(".menu-btn")
let navbar = document.querySelector(".navbar")

menu.addEventListener("click",function(){
    navbar.classList.toggle('active');
    
})

let search = document.querySelector(".search-btn")
 let form = document.querySelector("#search-form")

 search.addEventListener("click", function(){
    form.classList.toggle('active');
 })



let cross = document.querySelector("#close")
cross.addEventListener("click",function()
{
    form.classList.remove('active');

})


window.onscroll =()=>{
  form.classList.remove('active');
  navbar.classList.remove('active');


}




var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});



var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    640:{
      slidesPerView: 2,
    },
    768:{
      slidesPerView:2,
    },
    1020:{
      slidesPerView: 3,
    },
  }
  
  
});





