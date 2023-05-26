import { projectList } from "./addProject";

class Todo {
  constructor(title, dueDate, priority, description) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
  }
}

function addTodoToProject(projectId, title, dueDate, priority, description) {
  const project = projectList.find((project) => project.id === projectId);
  if (project) {
    const todo = new Todo(title, dueDate, priority, description);
    project.addTodo(todo);
  }
}

function removeTodo(projectId, todoIndex) {
  const project = projectList.find((project) => project.id === projectId);
  if (project) {
    project.removeTodo(todoIndex);
  }
}

function todoForm(projectId) {
  const form = document.querySelector(".addTaskForm");
  const title = form.querySelector("#title");
  const dueDate = form.querySelector("#date");
  const priority = form.querySelector("#priority");
  const description = form.querySelector("#description");

  addTodoToProject(
    projectId,
    title.value,
    dueDate.value,
    priority.value,
    description.value
  );
}

export { addTodoToProject, removeTodo, todoForm };
