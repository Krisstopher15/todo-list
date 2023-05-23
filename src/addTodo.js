import { projectList } from "./addProject";

let todoId = 0;

class Todo {
  constructor(id, title, description) {
    this.title = title;
    this.description = description;
    this.id = id;
  }
}

function addTodo(event) {
  const todoListContainer = document.querySelector(".todos");
  const form = document.createElement("form");
  form.classList.add("addTaskForm");

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
  `;
  todoListContainer.appendChild(form);
  const projectIndex = event.target.getAttribute("data-id");
  const project = projectList[projectIndex];
  const todo = new Todo(todoId, "Hello", "World");
  project.todoList.push(todo);
}

export { addTodo };
