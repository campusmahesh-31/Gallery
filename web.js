const refer=document.querySelector(".mobile-nav");
const mainho=document.querySelector("#maindivs");
const nav_head=document.querySelector("header");
const toogleHead=()=>{
nav_head.classList.toggle("active");
}
mainho.addEventListener('click',()={
nav_head.classList.remove("active");
}
refer.addEventListener('click',toogleHead);

