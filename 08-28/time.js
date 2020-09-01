const clockContainer = document.querySelector(".clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milli = date.getMilliseconds();
    clockTitle.innerText = `${year}년 ${month}월 ${day}일 ${hours < 10 ? `0${hours}` : hours}시 ${minutes < 10 ? `0${minutes}` : minutes }분 ${seconds < 10 ? `0${seconds}` : seconds}초 ${milli}`;

}

function init(){
    getTime();
    setInterval(getTime,1);
}
init();