let inputEl = document.getElementById("todo-input");
let table = document.getElementById("todo-list");

function displayTodos() {
    table.innerHTML = ""; // Clear previous list

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.forEach(todo => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${todo.task}</td><td>${todo.priority}</td>`;
        table.appendChild(row);
    });
}

// Display existing todos on page load
displayTodos();

let add = document.getElementById("add-btn");
add.addEventListener("click", () => {
    let task = inputEl.value;
    let priority = document.getElementById("priority-select").value;

    if (!task) return alert("Please enter a task.");

    let newTodo = {
        task: task,
        priority: priority
    };

    let existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    existingTodos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(existingTodos));

    inputEl.value = ""; // Clear input

    displayTodos(); // Update table
});
