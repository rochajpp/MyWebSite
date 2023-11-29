const body = document.querySelector("body");

const elements = document.querySelectorAll(".menu-a");


for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', () => {
        body.classList.toggle("menu-on");
    })
}

