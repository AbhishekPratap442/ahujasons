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
