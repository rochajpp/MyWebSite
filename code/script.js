const body = document.querySelector("body");



const header = document.querySelector("header");

function activeHeader(){
    header.classList.toggle("activeHeader", scrollY > 0);
}

document.addEventListener("scroll", activeHeader);