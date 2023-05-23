import { projectList, remove, projectId } from "./addProject";
import { addTodo } from "./addTodo";
import { renderTodos } from "./renderTodos";

function renderProjects() {
  const projectListContainer = document.querySelector(".project-list");
  projectListContainer.innerHTML = "";

  projectList.forEach((project, index) => {
    const list = document.createElement("div");
    list.classList.add("project");

    list.innerHTML = `
        <p data-id="${index}" class="btn-currentProject">${project.name}</p>
        <button data-id="${index}" class="btn-removeProject">Remove</button>
    `;
    const btnRemoveProject = list.querySelector(".btn-removeProject");
    // btnRemoveProject.addEventListener("click", (e) => {
    //   remove(e);
    //   renderProjects();
    // });

    const btnCurrentProject = list.querySelector(".btn-currentProject");
    btnCurrentProject.addEventListener("click", (e) => {
      console.log(project.todoList);
      addTodo(e);
      currentProject(e, index);
    });
    projectListContainer.appendChild(list);
  });
}

function currentProject(event, index) {
  const projectIndex = event.target.getAttribute("data-id");
  const project = projectList[projectIndex];

  renderTodos(project.todoList, index);
}

export { renderProjects };
