const body = document.querySelector("body");

document.querySelector(".logoResp").onclick = () => {
    body.classList.toggle("menu");
}


function Writer(element){

    const arrayList = element.innerHTML.split("");

    element.innerHTML = "";

    setTimeout(() => {  
        arrayList.forEach((letters, index) => {
            setTimeout(() => {
                element.innerHTML += letters;
            }, 50 * index)
        });
    
    }, 2000);
}
