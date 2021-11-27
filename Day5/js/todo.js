const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];
//해당 배열이 비어있으면 브라우저가 실행될때마다 배열을 비워버린다.
//application이 시작될때 toDos 배열이 날아가지 않게 해야한다.

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    //공백처리 한다고 해서 toDoInput이 사라지는게 아닌 newToDo에 저장된다.
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //toDos에 String화된 자료를 넣어줌으로서 localStorage에 저장된 자료가 유지되게
    parsedToDos.forEach(paintToDo);
    //forEach는 배열의 각 속성에 대해 함수를 실행시킨다.
}

