var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// A: Renders the items in the ToDo list.
function renderTodos() {
	// TODO: Describe the functionality of the following two lines of code.
	// A: Clears out the text box and sets the count.
	todoList.innerHTML = "";
	todoCountSpan.textContent = todos.length;

	// TODO: Describe the functionality of the following `for` loop.
	// A: Add list elements into todo for each todo on the screen.
	for (var i = 0; i < todos.length; i++) 
	{
	var todo = todos[i];

	var li = document.createElement("li");
	li.textContent = todo;
	li.setAttribute("data-index", i);

	var button = document.createElement("button");
	button.textContent = "Complete ✔️";

	li.appendChild(button);
	todoList.appendChild(li);
	}
}

// TODO: What is the purpose of the following function?
// A: Calls in when the page loads and reads your todos from local storage.
function init() {
	// TODO: What is the purpose of the following line of code?
	// A: Gets local storage of todos and puts it into storedTodos.
	var storedTodos = JSON.parse(localStorage.getItem("todos"));
	// TODO: Describe the functionality of the following `if` statement.
	// A: If there are todos, load in todos.
	if (storedTodos !== null) 
	{
		todos = storedTodos;
	}
	// TODO: Describe the purpose of the following line of code.
	renderTodos();
}

function storeTodos() {
	// TODO: Describe the purpose of the following line of code.
	// A: Store (and stringify) todos object into the local storage variable todos.

	localStorage.setItem("todos", JSON.stringify(todos));
}

// TODO: Describe the purpose of the following line of code.
// A: Submit event listener.

todoForm.addEventListener("submit", function(event) {
	event.preventDefault();
	var todoText = todoInput.value.trim();
	// TODO: Describe the functionality of the following `if` statement.
	// A: If the line is blank, exit out.

	if (todoText === "") {
		return;
	}
	// TODO: Describe the purpose of the following lines of code.
	// A: Set the value to the end of the todoText array.

	todos.push(todoText);
	todoInput.value = "";

	// TODO: What will happen when the following functions are called?
	// A: Store the todos in local storage and then render them.
	storeTodos();
	renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// A: 
todoList.addEventListener("click", function(event) {
	var element = event.target;

	// TODO: Describe the functionality of the following `if` statement.
	// A: If the event is a button, do this.	
	if (element.matches("button") === true) 
	{
		var index = element.parentElement.getAttribute("data-index");
		todos.splice(index, 1);

		// TODO: What will happen when the following functions are called?
		// A: Store the todos and then render them.
		storeTodos();
		renderTodos();
	}
});

init();
