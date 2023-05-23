import { projectList } from "./addProject";
import { renderTodos } from "./renderTodos";

let todoId = 0;

class Todo {
  constructor(id, title, dueDate, priority, description) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = id;
  }
}

function addTodo(index) {
  const todoListContainer = document.querySelector(".todos");
  const form = document.createElement("form");
  form.classList.add("addTaskForm");

  todoListContainer.innerHTML = "";

  form.innerHTML = `
    <div class="new-task">
              <h2>New Task</h2>
              <button class="btn-close">+</button>
            </div>
            <div class="input-title inputs">
              <label for="title">Task</label>
              <input type="text" name="title" id="title" />
            </div>
            <div class="input-date inputs">
              <label for="date">Date</label>
              <input type="date" name="date" id="date" />
            </div>
            <div class="input-priority inputs">
              <label for="priority">Priority</label>
              <select name="priority" id="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div class="input-desc inputs">
              <label for="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit" class="btn-submit">ADD TASK</button>
  `;
  todoListContainer.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const project = projectList[index];
    const title = form.querySelector("#title");
    const description = form.querySelector("#description");
    const dueDate = form.querySelector("#date");
    const priority = form.querySelector("#priority");
    const todo = new Todo(
      todoId,
      "Hello World",
      "20/05/2023",
      "Medium",
      "asfdlasdflsadfjsadf"
    );
    project.todoList.push(todo);
    todoListContainer.removeChild(form);
    renderTodos;
    console.table(project.todoList);
    todoId++;
  });

  const btnClose = form.querySelector(".btn-close");

  btnClose.addEventListener("click", () => {
    todoListContainer.removeChild(form);
  });

  // const projectIndex = event.target.getAttribute("data-id");
  console.log(index);
}

export { addTodo };
