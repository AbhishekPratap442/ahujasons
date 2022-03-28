const navMenu = document.querySelector(".navMenu");
const close_nav= document.querySelector(".close_nav");
const nav_links= document.querySelector(".nav_links");
navMenu.addEventListener('click', ()=>{
    console.log("this is a click event");
    nav_links.classList.toggle("active");
    
  close_nav.document.querySelector(".close_nav").style.display='inline'
  navMenu.document.querySelector(".navMenu").style.display='none'

})
close_nav.addEventListener('click', ()=>{
    console.log("this is a click event");
  
     nav_links.classList.toggle("active");
})






