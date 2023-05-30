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
          <div class="priority-circle"></div>
          <p class="title">${todo.title}</p>
          <p class="description">${todo.description}</p>
        </div>
        <div class="date-and-btns">
          <p>${todo.dueDate}</p>
          <button class="btn-edit" data-project-id="${project.id}" data-todo-index="${index}">Edit</button>
          <button class="btn-remove-task" data-project-id="${project.id}" data-todo-index="${index}">+</button>
        </div>
      `;
      const priorityCircle = todoElement.querySelector(".priority-circle");
      CheckPriority(todo, priorityCircle);
      todoListContainer.appendChild(todoElement);
    });
  }
}

function CheckPriority(todo, todoElement) {
  switch (todo.priority) {
    case "low":
      todoElement.classList.add("priority-low");
      break;
    case "medium":
      todoElement.classList.add("priority-medium");
      break;
    case "high":
      todoElement.classList.add("priority-high");
      break;
  }
}

export { renderTodos };
