import "./style.css";
import {
  createProject,
  removeProject,
  projectList,
  Project,
} from "./addProject";
import { addTodoToProject, removeTodo, todoForm } from "./addTodo";
import { renderTodos } from "./renderTodos";

const addProjectForm = document.querySelector(".add-project");
const btnAddTodo = document.querySelector(".add-todo");
const projectsContainer = document.querySelector(".projects");
const todoListContainer = document.querySelector(".todo-list");
const projectTitleElement = document.querySelector(".project-name");
const mainContainer = document.querySelector(".main-container");
const form = document.querySelector(".addTaskForm");

addProjectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const projectName = document.querySelector("#project-name").value;
  createProject(projectName);
  renderProjects();
  addProjectForm.reset();
});

projectsContainer.addEventListener("click", (event) => {
  if (event.target.matches(".btn-remove-project")) {
    const projectId = parseInt(event.target.dataset.projectId);
    removeProject(projectId);
    renderProjects();
  } else if (event.target.matches(".project-name")) {
    const projectId = parseInt(event.target.dataset.projectId);
    btnAddTodo.dataset.projectId = projectId;
    renderProjectTodos(projectId);
    form.classList.add("visibility");
    console.log(btnAddTodo.dataset.projectId);
  }
});

function renderProjects() {
  projectsContainer.innerHTML = "";

  projectList.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project-element");

    projectElement.innerHTML = `
      <p class="project-name" data-project-id="${project.id}">${project.name}</p>
      <button class="btn-remove-project" data-project-id="${project.id}">Remove</button>
    `;

    projectsContainer.appendChild(projectElement);
  });
}

function renderProjectTodos(projectId) {
  const project = projectList.find((project) => project.id === projectId);
  if (project) {
    projectTitleElement.textContent = project.name;
    todoListContainer.innerHTML = "";
    renderTodos(projectId);
  }
}

mainContainer.addEventListener("click", (event) => {
  if (event.target.closest(".add-todo")) {
    const projectId = parseInt(event.target.dataset.projectId);
    form.dataset.projectId = projectId;
    form.classList.remove("visibility");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const projectId = parseInt(event.target.dataset.projectId);
  todoForm(projectId);
  form.classList.add("visibility");
  form.reset();
  console.log(projectId);
  console.log(projectList);
});

todoListContainer.addEventListener("click", (event) => {
  if (event.target.matches(".btn-remove-task")) {
    const projectId = parseInt(event.target.dataset.projectId);
    const todoIndex = parseInt(event.target.dataset.todoIndex);
    removeTodo(projectId, todoIndex);
    renderTodos(projectId);
  }
});

createProject("Hi");
renderProjects();
