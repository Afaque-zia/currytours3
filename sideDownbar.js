let hamburger = document.querySelector("#trigger-menu");
let backsvg = document.querySelector(".back-svg");
let sidebar = document.querySelector("#sidebar");
let mainicon = document.querySelector(".main-icon");
let body = document.querySelector("body")
let middiv1 = document.querySelector(".mid-div1");
let middiv2 = document.querySelector(".mid-div2");
let middiv3 = document.querySelector(".mid-div3");
let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");
let downbarsvg =document.querySelectorAll(".downbarsvg");
let headingspan =document.querySelectorAll(".heading-span");
let downbar =document.querySelector(".downbar");

heading1.addEventListener("mouseover", () => {
    middiv1.style.display = "inline"
    middiv2.style.display = "none"
    middiv3.style.display = "none"
})
heading2.addEventListener("mouseover", () => {
    middiv1.style.display = "none"
    middiv2.style.display = "inline"
    middiv3.style.display = "none"
})
heading3.addEventListener("mouseover", () => {
    middiv1.style.display = "none"
    middiv2.style.display = "none"
    middiv3.style.display = "inline"
})
hamburger.addEventListener("click", () => {
    if(hamburger.classList.contains("is-clicked")){
        if(window.innerWidth <= 1200){
            downbar.style.bottom = "0";
        }else{
            sidebar.style.left = "0";
        }
        body.style.overflowY = "hidden";
    }else{
        if(window.innerWidth <= 1200){
            downbar.style.bottom = "-102%";
        }else{
            sidebar.style.left = "-102%";
        }
        body.style.overflowY = "visible";
    }
})
downbarsvg.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        if(headingspan[index].classList.contains('spanadd')){
            headingspan[index].classList.remove('spanadd')
        }else{
            headingspan[index].classList.add('spanadd')
        }
    })
})