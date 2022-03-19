const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

const TODOS_KEY = "todos";
let toDos = [];

const menu = document.querySelector(".menu");
const todoBar = document.querySelector("#todoBar");
menu.onclick = function(){
    menu.classList.toggle("active");
    todoBar.classList.toggle("active");
};



function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove(); 
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    //filter는 함수 내용을 바꾸는 함수가 아님

    saveToDos();
}

function checkTodo(event){
    const li = event.target.parentElement;
    if(li.style.textDecoration === "line-through"){
        li.style.textDecoration = "none";
    }else{
     li.style.textDecoration = "line-through"
    }
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const div = document.createElement("div");
    const icon = document.createElement("ion-icon");
    icon.name = "close-outline"
    icon.addEventListener("click",deleteTodo);
    const icon2 = document.createElement("ion-icon");
    icon2.name = "checkmark-outline"
    
    icon2.addEventListener("click", checkTodo);
    li.appendChild(span); //appen은 거의 마지막에 넣기
    div.appendChild(icon);
    div.appendChild(icon2);
    li.appendChild(div);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
    //요놈 물건이네;;; 인자도 각각 자동으로 넘겨주네;;;
}