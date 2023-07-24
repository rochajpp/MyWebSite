const body = document.querySelector("body");

document.querySelector(".logoResp").onclick = () => {
    body.classList.toggle("menu");
}

const header = document.querySelector("header");

function activeHeader(){
    header.classList.toggle("activeHeader", scrollY > 0);
}

document.addEventListener("scroll", activeHeader);