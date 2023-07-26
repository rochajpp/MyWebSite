const next = document.querySelector(".nextButton");
const back = document.querySelector(".backButton");
const items = document.querySelector(".images");

next.onclick = () => {
    items.style.left = "10rem";
}