import "./style.css";
import { renderProjects } from "./renderProjects";
import { addProject, projectList } from "./addProject";
import { emptyList } from "./emptyList";

emptyList();
renderProjects();

const btnAddProject = document.querySelector(".add-project");
const currentProject = document.querySelectorAll(".btn-currentProject");

btnAddProject.addEventListener("submit", (e) => {
  e.preventDefault();
  addProject();
  renderProjects();
});

// const projectListContainer = document.querySelector(".project-list");

// projectListContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn-currentProject")) {
//     console.log("asdf");
//   }
// });
