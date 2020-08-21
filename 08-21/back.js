const back = document.querySelector(".wrapper");
const inside = document.querySelector(".one");

function handleClick(){
    back.style.backgroundColor = "#"+(parseInt(Math.random()*0xffffff)).toString(16);
}

function handleClick2(){
    inside.style.backgroundColor = "#"+(parseInt(Math.random()*0xffffff)).toString(16);
}

function init(){
    back.addEventListener("click", handleClick);
    inside.addEventListener("click", handleClick2);
}
init();