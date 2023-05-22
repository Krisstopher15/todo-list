let projectList = [];
let projectId = 0;

class Project {
  constructor(id, name) {
    this.name = name;
    this.id = id;
  }
}

function addProject() {
  const projectName = document.querySelector("#project-name").value;

  const project = new Project(projectId, projectName);
  projectList.push(project);
  projectId++;

  console.table(projectList);
}

export { addProject, projectList };
