function emptyList() {
  const todoList = document.querySelector(".todo-list");
  const todos = document.querySelector(".todos");
  const projectInfo = document.querySelector(".project-info");
  const btnAddTask = document.querySelector(".add-task-btn");

  if (!todos.hasChildNodes(".todo-element")) {
    todos.innerHTML = `
        <div class="empty-list">
            <p>EMPTY LIST</p>
        </div>
    `;
    console.log("Empty List");
  } else {
  }
}

export { emptyList };
