import { projectList } from "./addProject";

let todoId = 0;

class Todo {
  constructor(id, title, description) {
    this.title = title;
    this.description = description;
    this.id = id;
  }
}

function addTodo(index) {
  const todoListContainer = document.querySelector(".todos");
  const form = document.createElement("form");
  form.classList.add("addTaskForm");

  todoListContainer.innerHTML = "";

  form.innerHTML = `
    <div class="input-title inputs">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div class="input-desc inputs">
            <label for="description">Description</label>
            <input type="text" name="description" id="description" />
          </div>
          <div class="input-date inputs">
            <label for="date">Date</label>
            <input type="date" name="date" id="date" />
          </div>
          <div class="input-priority inputs">
            <select name="priority" id="prioity">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit" class="btn-submit">ADD</button>
          <button class="btn-close">X</button>
  `;
  todoListContainer.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const project = projectList[index];
    const title = form.querySelector("#title");
    const description = form.querySelector("#description");
    const todo = new Todo(todoId, title.value, "World");
    project.todoList.push(todo);
    todoListContainer.removeChild(form);
    console.table(project.todoList);
  });

  const btnClose = form.querySelector(".btn-close");

  btnClose.addEventListener("click", () => {
    todoListContainer.removeChild(form);
  });

  // const projectIndex = event.target.getAttribute("data-id");
  console.log(index);
}

export { addTodo };
