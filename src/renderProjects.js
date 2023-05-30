import { projectList } from "./addProject";
import { renderTodos } from "./renderTodos";

const projectsContainer = document.querySelector(".projects");
const todoListContainer = document.querySelector(".todo-list");
const projectTitleElement = document.querySelector(".project-name");

function renderProjects() {
  projectsContainer.innerHTML = "";

  projectList.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project-element");
    projectElement.dataset.projectId = project.id;

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

export { renderProjects, renderProjectTodos };
