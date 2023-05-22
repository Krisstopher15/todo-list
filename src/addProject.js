let projectList = [];
let projectId = 0;

class Project {
  constructor(id, name) {
    this.name = name;
    this.id = id;
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }
}

function addProject() {
  const projectName = document.querySelector("#project-name").value;

  const project = new Project(projectId, projectName);
  projectList.push(project);
  projectId++;

  console.table(projectList);
}

function remove(event) {
  const target = event.target.getAttribute("data-id");
  const nTarget = parseInt(target);

  projectList.splice(nTarget, 1);
}

export { addProject, projectList, remove };
