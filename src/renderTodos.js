import { projectList } from "./addProject";

// function renderTodos(todoList) {
//   const todoListContainer = document.querySelector(".todos");

//   todoListContainer.innerHTML = "";

//   projectList.forEach((project) => {
//     project.todoList.forEach((todo) => {
//       const todoElement = document.createElement("div");

//       todoElement.innerHTML = `
//         <p>${todo.title}</p>
//         <p>${todo.description}</p>
//       `;
//       todoListContainer.appendChild(todoElement);
//     });
//   });
// }

function renderTodos(todoList, index) {
  const todoListContainer = document.querySelector(".todos");
  const projectTitle = document.querySelector(".project-title");
  const project = projectList[index].name;
  projectTitle.textContent = project;
  todoListContainer.innerHTML = "";

  todoList.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.innerHTML = `
        <p>${todo.title}</p>
        <p>${todo.description}</p>
      `;

    todoListContainer.appendChild(todoElement);
  });
}

export { renderTodos };
