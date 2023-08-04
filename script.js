const check = document.querySelector(".checkBtn");
const ul = document.getElementById("ul");
const menu = document.getElementById("menu");
const img = document.getElementById("imgplus");
const container = document.querySelector(".container")

let toggle = false;

img.addEventListener("click",()=>{
    ul.classList.toggle("magic");
    document.body.classList.toggle('fixed-position');
      
})

img.addEventListener("click",()=>
{
    console.log("hii")
    toggle = !toggle;
    if(toggle)
    {
       
        img.src = './assets/images/icon-menu-close.svg'
    }
    else
    {
        img.src = './assets/images/icon-menu.svg';
    }
})