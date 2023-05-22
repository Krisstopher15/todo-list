import "./style.css";
import { renderProjects } from "./renderProjects";
import { addProject } from "./addProject";

renderProjects();

const btnAddProject = document.querySelector(".add-project");

btnAddProject.addEventListener("submit", (e) => {
  e.preventDefault();
  addProject();
  renderProjects();
});
