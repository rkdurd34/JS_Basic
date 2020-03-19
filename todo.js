const toDoForm = document.querySelector(".js-todoform"),
    todDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todolist");

const TODOS_LS = "toDos";

const toDos = [];
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintToDo(text) {
    
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const newId = toDos.length + 1;
    const span = document.createElement('span');
    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj)
    saveToDos();
};

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todDoInput.value;
    paintToDo(currentValue);
    todDoInput.value = '';
}
function something(toDo) {
    console.log(toDo.text);
}
function loadToDos() {
    const loadedtoDos = localStorage.getItem(TODOS_LS)
    if (loadedtoDos !== null) {
        const parsedToDos = JSON.parse(loadedtoDos)
        
        // parsedToDos.forEach(something);
        // ---------------> 위에랑 같은 건데 다른 형식
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();