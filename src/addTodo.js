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
  const projectIndex = event.target.getAttribute("data-id");
  const project = projectList[projectIndex];
  const todo = new Todo(todoId, "Hello", "World");
  project.todoList.push(todo);
}

export { addTodo };
