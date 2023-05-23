import { projectList } from "./addProject";
import { addTodo } from "./addTodo";

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
  const projectInfo = document.querySelector(".project-info");
  const btnAdd = document.createElement("button");
  btnAdd.textContent = "ADD PROJECT";
  btnAdd.dataset.id = index;
  projectInfo.appendChild(btnAdd);
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

  btnAdd.addEventListener("click", addTodo);
}
export { renderTodos };
