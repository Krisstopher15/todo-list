function emptyList() {
  const todoList = document.querySelector(".todo-list");
  const todos = document.querySelector(".todos");

  if (!todos.hasChildNodes(".todo-element")) {
    todos.innerHTML = `
        <div class="empty-list">
            <p>EMPTY LIST</p>
        </div>
    `;
    console.log("Empty List");
  }
}

export { emptyList };
