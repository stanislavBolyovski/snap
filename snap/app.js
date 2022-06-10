// mobile func
const menu = document.querySelector("#menu");
const section = document.querySelector('.height');
const closeX = document.querySelector('#x');
const innerUl = document.querySelector(".innerUl");
const features = document.querySelector('#features');
const menuBars = document.querySelector("#menu-bars");
const company = document.querySelector('#company');
const innerUlF = document.querySelector(".innerUlC");

menuBars.addEventListener("click",()=>{
    menu.classList.add("display");
    section.classList.add("blurred");
})
closeX.addEventListener('click', ()=>{
    menu.classList.remove("display");
    section.classList.remove("blurred");
})
features.addEventListener('click', ()=>{   
   if(innerUl.classList.value.includes('display')){
    innerUl.classList.remove("display");
   } else{
    innerUl.classList.add("display");
   }
})
company.addEventListener('click', ()=>{
    if(innerUlF.classList.value.includes('display')){
        innerUlF.classList.remove("display");
       } else{
        innerUlF.classList.add("display");
       }
})

// desktop func
const featuresD = document.querySelector("#featuresD");
const companyD = document.querySelector("#companyD");
const openedDesktop = document.querySelector(".opened-desktop");
const openedCDesktop = document.querySelector(".openedC-desktop");

featuresD.addEventListener("click", ()=>{
    if(openedDesktop.classList.value.includes('display')){
        openedDesktop.classList.remove("display");
       } else{
        openedDesktop.classList.add("display");
        openedCDesktop.classList.remove("display");
       }
   
})
companyD.addEventListener("click", ()=>{
    console.log(openedCDesktop.classList.value.includes('display'));
    if(openedCDesktop.classList.value.includes('display')){
        openedCDesktop.classList.remove("display");
       } else{
        openedDesktop.classList.remove("display");
        openedCDesktop.classList.add("display");
       }
})