const header = document.querySelector("header");

function activeHeader(){
    header.classList.toggle("activeHeader", scrollY > 0);
}

document.addEventListener("scroll", activeHeader);

function activeMenu(){
    const body = document.querySelector("body");
    body.classList.toggle("menu-on");
}

const label = document.querySelectorAll(".info label");
const input = document.querySelectorAll(".info input");

input[0].addEventListener('focus', () => {
    label[0].style.bottom = "2rem";
})

input[0].addEventListener('blur', function() {
    if(input[0].value == ""){
        label[0].style.bottom = "";
    }
});

input[1].addEventListener('focus', () => {
    label[1].style.bottom = "2rem";
})

input[1].addEventListener('blur', function() {
    if(input[1].value == ""){
        label[1].style.bottom = "";
    }
});


