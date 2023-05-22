import { projectList } from "./addProject";

function renderProjects() {
  const projectListContainer = document.querySelector(".project-list");
  projectListContainer.innerHTML = "";

  projectList.forEach((project) => {
    const list = document.createElement("div");
    list.classList.add("project");

    list.innerHTML = `
        <p>${project.name}</p>
        <button class="btn-delProject">X</button>
    `;
    projectListContainer.appendChild(list);
  });
}

export { renderProjects };
