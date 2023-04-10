// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('#filter-todo');
//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
document.addEventListener('DOMContentLoaded', getTodos);



//functions

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    // ass to do to local storage
    saveLocalTodos(todoInput.value);

    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    if (todoInput.value === "") {
        todoInput.placeholder = "Add your todo here first!";

    } else {
        todoInput.placeholder = "";
        // checkmark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = `<i class="fas fa-check"></i>`;
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        // trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        //append to list

        todoList.appendChild(todoDiv);

        //clear todo input value

        todoInput.value = "";
    }
}

function deleteCheck(e) {
    // console.log(e.target);
    const item = e.target;
    // Delete 
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        removeTodo(todo);
        todo.addEventListener(`transitionend`, function () {
            todo.remove();
        });
    }

    //checkmark 
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        if (todo.nodeType === 1) { // check if node is an element
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break; // add missing break statement
                case "uncompleted":
                    if (!todo.classList.contains('completed')) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;

            }
        }
    })
}

function saveLocalTodos(todo) {
    if (todo.trim() === '') { // if todo input is empty or just whitespace
        return; // don't save to local storage
    }
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function (todo) {
        //todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        // checkmark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = `<i class="fas fa-check"></i>`;
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        // trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        //append to list
        todoList.appendChild(todoDiv);
    });
}


function removeTodo(todo) {
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}