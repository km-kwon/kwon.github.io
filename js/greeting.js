const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const login = document.querySelector(".login");
const afterLogin = document.querySelector(".afterLogin");
const HIDDEN_CLASSNAME = "hidden";
/*string만 넣는 변수는 무조건 다 대문자*/
const USERNAME_KEY = "username";
const ACTIVE = "active"

checkLogin();
function checkLogin(){
  if(localStorage.getItem(USERNAME_KEY)){
    const username = localStorage.getItem(USERNAME_KEY);
    paintGreeting(username);
  } else{
    loginForm.addEventListener("submit", handleSubmit);
    /*Eventlistener는 무조건 첫번째 argument는 event의 대한 정보*/    
  }
  return;
}
function paintGreeting(username){  
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  login.classList.add(ACTIVE);
  afterLogin.classList.remove(HIDDEN_CLASSNAME);
  afterLogin.classList.add(ACTIVE);
}
function handleSubmit(event){
  event.preventDefault();  
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}




































































/*
1일차 

const title = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  handleResizingWindow: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  handleRightClick: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[4];
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResizingWindow);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);
*/

/*
1. css파일을 추가하지 않는 방법.
2. css파일을 이용한 방법.
두가지 방법이 존재하나 이번 과제에는 css파일을 추가하지 않는 방법을 씀
대신 css파일을 이용했을때 방법은 주석으로 써놓도록 하겠음

ㅡㅡㅡㅡㅡㅡㅡㅡㅡcss파일에 추가할 내용ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

.skyblue{
  background-color: skyblue;
}
.yellow{
  background-color: yellow;
}
.purple{
  background-color: purple;
}
ㅡㅡㅡㅡㅡㅡㅡㅡㅡjs파일에 추가할 내용 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const body = document.querySelector("body");
const skyblue = "skyblue";
const purple = "purple";
const yellow = "yellow";
function setFirstColor(){
  const width = window.innerWidth;
  if(width < 300){
    body.classList.add(skyblue);
  }
  else if(width >=300 && width < 800){
    body.classList.add(purple);
  }
  else if(width > 800){
    body.classList.add(yellow);
  }
}
setFirstColor();

function changeColor(){
  const width = window.innerWidth;
  if(width < 300){
    //특정 class가 존재하지 않아도 remove했을때 발생하는 오류가 없으므로, 추가적은 세부 사항은 고려하지 않고 remove를 사용함
    body.classList.remove(purple);
    body.classList.remove(yellow);
    body.classList.add(skyblue);
  }
  else if(width >=300 && width < 800){
    body.classList.remove(yellow);
    body.classList.remove(skyblue);
    body.classList.add(purple);
  }
  else if(width > 800){
    body.classList.remove(purple);
    body.classList.remove(skyblue);
    body.classList.add(yellow);
  }
}

window.addEventListener("resize", changeColor);


const body = document.querySelector("body");
const skyblue = "skyblue";
const purple = "purple";
const yellow = "yellow";

function firstColorSet() {
  const firstWidth = window.innerWidth;
  if (firstWidth < 300) {
    body.style.backgroundColor = skyblue;
  } else if (firstWidth >= 300 && firstWidth < 500) {
    body.style.backgroundColor = purple;
  } else if (firstWidth >= 500) {
    body.style.backgroundColor = yellow;
  }
}
firstColorSet();

function changeColor() {
  const width = window.innerWidth;
  if (width < 300) {
    body.style.backgroundColor = skyblue;
  } else if (width >= 300 && width < 800) {
    body.style.backgroundColor = purple;
  } else if (width >= 800) {
    body.style.backgroundColor = yellow;
  }
}

window.addEventListener("resize", changeColor);

*/