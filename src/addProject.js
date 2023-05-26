let projectList = [];
let projectId = 0;

class Project {
  constructor(name) {
    this.name = name;
    this.todoList = [];
    this.id = projectId++;
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  removeTodo(index) {
    this.todoList.splice(index, 1);
  }
}

function createProject(name) {
  const project = new Project(name);
  projectList.push(project);
}

function removeProject(projectId) {
  projectList = projectList.filter((project) => project.id !== projectId);
}

export { createProject, removeProject, projectList, Project };
