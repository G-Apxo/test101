// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterOption = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

//Event Listeners

todoButton.addEventListener("clcik" , addTodo);
todoList.addEventListener("click", deltedeCheck);


// Functions
function addTodo(event){
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    //Check Mark button
    const compltedButton = document.createElement("button");
    compltedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    compltedButton.classList.add("complete-btn")
    todoDiv.appendChild(compltedButton);

    //Check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild.add(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);
}

function deltedeCheck(event){
    
}