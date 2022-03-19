const clock = document.querySelector("#clock");

function setclock(){
    const time = new Date();
    const hour = String(time.getHours()).padStart("2",0);
    const minutes = String(time.getMinutes()).padStart("2",0);
    const second = String(time.getSeconds()).padStart("2",0);
    clock.innerText = `${hour}:${minutes}:${second}`;
}
setclock();

setInterval(setclock, 1000);
