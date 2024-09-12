const projectScreen = document.querySelector(".project-info");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
    
function infoProject(index){
    projectScreen.style.display = "flex";
    
    if(index == 1){
        b1.style.background="url('/img/appleClone.jpeg') center no-repeat";
        b1.style.backgroundSize = "cover";

        b1.style.display = "flex";

    } else if(index == 2){
        b2.style.background="url('/img/apiNasa.jpeg') center no-repeat";
        b2.style.backgroundSize = "cover";

        b2.style.display = "flex";
    } else{
        // Projeto 3
        b3.style.background="url('/img/portfolio.jpeg') center no-repeat";
        b3.style.backgroundSize = "cover";

        b3.style.display = "flex";
    }
}

function closeInfoProject(){
    projectScreen.style.display = "none";
    b1.style.display = "none";
    b2.style.display = "none";
    b3.style.display = "none";
}