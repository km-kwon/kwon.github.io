const  audio = document.querySelector("#player");
const playBtn = document.querySelector("#playBtn");

function playMusic(){
    audio.loop = true;
    audio.volume = 0.8;
    audio.play();
}


playBtn.addEventListener("click", playMusic);