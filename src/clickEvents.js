import { createProject, removeProject } from "./addProject";
import { removeTodo, todoForm } from "./addTodo";
import { renderTodos } from "./renderTodos";
import { renderProjects, renderProjectTodos } from "./renderProjects";

function clickEvents() {
  const addProjectForm = document.querySelector(".add-project");
  const btnAddTodo = document.querySelector(".add-todo");
  const projectsContainer = document.querySelector(".projects");
  const todoListContainer = document.querySelector(".todo-list");
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
    } else if (event.target.closest(".project-element")) {
      const projectId = parseInt(event.target.dataset.projectId);
      btnAddTodo.dataset.projectId = projectId;
      renderProjectTodos(projectId);
      console.log("object");
    }
  });

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
    renderTodos(projectId);
    form.reset();
  });

  todoListContainer.addEventListener("click", (event) => {
    if (event.target.matches(".btn-remove-task")) {
      const projectId = parseInt(event.target.dataset.projectId);
      const todoIndex = parseInt(event.target.dataset.todoIndex);
      removeTodo(projectId, todoIndex);
      renderTodos(projectId);
    }
    // else if (event.target.matches(".btn-edit")) {
    //   const projectIndex = parseInt(event.target.getAttribute("data-project-id"));
    //   const todoIndex = parseInt(event.target.getAttribute("data-todo-index"));
    //   editTodo(projectIndex, todoIndex);
    // }
  });
}

export { clickEvents };
