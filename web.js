const refer=document.querySelector(".mobile-nav");
const main=document.querySelector("#main");
const nav_head=document.querySelector("header");
const toogleHead=()=>{
nav_head.classList.toggle("active");
}
main.addEventListener('click',()=>{
    nav_head.classList.remove("active");
})
refer.addEventListener('click',toogleHead);
