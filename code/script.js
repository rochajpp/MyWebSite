const header = document.querySelector("header");

function activeHeader(){
    header.classList.toggle("activeHeader", scrollY > 0);
}

document.addEventListener("scroll", activeHeader);

function activeMenu(){
    const body = document.querySelector("body");
    body.classList.toggle("menu-on");
}


