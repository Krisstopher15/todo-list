import { projectList } from "./addProject";
import { addTodo } from "./addTodo";

function renderTodos(todoList, index) {
  const todoListContainer = document.querySelector(".todos");
  const projectTitle = document.querySelector(".project-title");
  const projectInfo = document.querySelector(".project-info");
  const addTask = document.querySelector(".add-task-btn");
  const project = projectList[index].name;

  projectTitle.innerHTML = `
    <span class="project-name">${project}</span>
  `;
  todoListContainer.innerHTML = "";

  todoList.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-element");
    todoElement.innerHTML = `
        <div class="title-desc">
          <div class="priority"></div>
          <p class="title">${todo.title}</p>
          <p class="desc">${todo.description}</p>
        </div>
        <div class="date-and-btns">
          <p>${todo.dueDate}</p>
          <button class="btn-edit">Edit</button>
          <button class="btn-remove-task">Remove</button>
        </div>
      `;

    todoListContainer.appendChild(todoElement);
  });
  addTask.addEventListener("click", () => {
    console.log("adf");
    openForm(index);
  });
}

function openForm(index) {
  addTodo(index);
  console.log(index);
}

export { renderTodos };
