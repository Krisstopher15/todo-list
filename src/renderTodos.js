import { projectList } from "./addProject";

function renderTodos(projectId) {
  const project = projectList.find((project) => project.id === projectId);
  if (project) {
    const todoListContainer = document.querySelector(".todo-list");
    todoListContainer.innerHTML = "";

    project.todoList.forEach((todo, index) => {
      const todoElement = document.createElement("div");
      todoElement.classList.add("todo-element");
      todoElement.dataset.todoIndex = index;

      todoElement.innerHTML = `
        <div class="title-desc">
          <div class="priority"></div>
          <p class="title">${todo.title}</p>
          <p class="description">${todo.description}</p>
        </div>
        <div class="date-and-btns">
          <p>${todo.dueDate}</p>
          <button class="btn-edit">Edit</button>
          <button class="btn-remove-task" data-project-id="${project.id}" data-todo-index="${index}">+</button>
        </div>
      `;
      todoListContainer.appendChild(todoElement);
    });
  }
}

export { renderTodos };
