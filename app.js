const navMenu = document.querySelector(".navMenu");
const close_nav = document.querySelector(".close_nav");
const nav_links = document.querySelector(".nav_links");
const dropdown = document.querySelector(".footer_links h3 ");
const quicklinks = document.getElementById("quick_links");
const abhi = document.querySelector(".quick_links_para");
const customerServives = document.querySelector("#customer_services");
const customerServivesPara = document.querySelector(".customer_services_para");
const myProfile = document.querySelector("#my_profile");
const myProfilePara = document.querySelector(".my_profile_para");
const para = document.querySelector(".para");
const gray_div = document.querySelector(".gray_div");
const flags = document.querySelector("#flags");
const flag = document.querySelector(".flag");
const side_filter = document.querySelector(".side_filter");
const left_filter = document.querySelector('.left_filter');
const hide = document.querySelector('.hide');
const right_filter = document.querySelector('.right_filter')
const shrot_by_choice= document.querySelector('.shrot_by_choice ') 
const filter_type = document.querySelector('.filter_type');
const filter_type_list = document.querySelector('.filter_type_list');





flags.addEventListener("click", () => {
  flag.classList.toggle(".show");
});

navMenu.addEventListener("click", () => {
  nav_links.classList.toggle("active");
});

close_nav.addEventListener("click", () => {
  nav_links.classList.toggle("active");
});

dropdown.addEventListener("click", () => {
  para.classList.toggle("display");
});

quicklinks.addEventListener("click", () => {
  abhi.classList.toggle("display");
});

customerServives.addEventListener("click", () => {
  customerServivesPara.classList.toggle("display");
});
myProfile.addEventListener("click", () => {
  myProfilePara.classList.toggle("display");
});
gray_div.addEventListener("click", () => {
  nav_links.classList.toggle("active");
});

left_filter.addEventListener("click", () => {
  
  console.log('this is called')
  side_filter.classList.toggle("filter_display");
  left_filter.classList.toggle('.hide')
});
right_filter.addEventListener('mouseover',()=>{
  shrot_by_choice.style.display = 'block'
})
right_filter.addEventListener('mouseout',()=>{
  shrot_by_choice.style.display = 'none'
})
filter_type.addEventListener('click',()=>{
  filter_type_list.classList.toggle("filter_type_list_display");
})

