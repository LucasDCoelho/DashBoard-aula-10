let modeSwitch = document.querySelector('.mode-switch');
let body = document.querySelector("body");
let lightMode = localStorage.getItem('lightMode');

if (lightMode === null){
    modeSwitch.classList.toggle("active");
    header.classList.toggle("active");
}


modeSwitch.onclick = (e) => {
    e.target.classList.toggle("active");
    header.classList.toggle("active");
    body.classList.toggle("active");
    if(header.classList.contains("active")){
        localStorage.setItem("lightMode", true)
    }else {
        localStorage.setItem("lightMode", false)
    }
}


let btnAbrir = document.querySelector(".abrir-lateral");
btnAbrir.onclick = () => {
    lateral.classList.add("active");
}


let btnFechar = document.querySelector(".fechar-lateral");
btnFechar.onclick = () => {
    lateral.classList.remove("active");
}
