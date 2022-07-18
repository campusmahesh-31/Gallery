const refer=document.querySelector(".mobile-nav");

const nav_head=document.querySelector("header");
console.log(nav_head);



// const toogleHead=()=>{

// nav_head.classList.toggle("active");

// }
refer.addEventListener('click',toogleHead=()=>{
    nav_head.classList.toggle("active");
});

