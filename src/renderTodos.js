import { projectList } from "./addProject";
import { addTodo } from "./addTodo";

function renderTodos(todoList, index) {
  const todoListContainer = document.querySelector(".todos");
  const projectTitle = document.querySelector(".project-title");
  const projectInfo = document.querySelector(".project-info");
  const addTask = document.querySelector(".add-task-btn");
  const project = projectList[index].name;

  projectTitle.innerHTML = `
    <span class="span-project"></span>
    <span class="project-name">${project}</span>
  `;
  todoListContainer.innerHTML = "";

  todoList.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todoElement");
    todoElement.innerHTML = `
        <p>${todo.title}</p>
        <p>${todo.description}</p>
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
