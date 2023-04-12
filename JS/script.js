let modeSwitch = document.querySelector('.mode-switch');
let header = document.querySelector('header');
let body = document.querySelector("body");
modeSwitch.onclick = (e) => {
    e.target.classList.toggle("active");
    header.classList.toggle("active");
    body.classList.toggle("active");
}

