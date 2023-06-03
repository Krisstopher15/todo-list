import { projectList } from "./addProject";
import { Todo } from "./addTodo";
import { renderTodos } from "./renderTodos";

function editTodo(todoIndex, projectId) {
  const project = projectList.find((project) => project.id === projectId);
  if (project) {
    const thisTodo = project.todoList[todoIndex];
    const mainContainer = document.querySelector(".main-container");
    const editForm = document.createElement("form");
    editForm.classList.add("edit-form");

    const title = form.querySelector("#title");
    const dueDate = form.querySelector("#date");
    const priority = form.querySelector("#priority");
    const description = form.querySelector("#description");
    title.value = thisTodo.title;
    dueDate.value = thisTodo.dueDate;
    description.value = thisTodo.description;

    editForm.innerHTML = `
        <label for="edit-title" >Title</label>
        <input value="${title.value}" type="text" id="edit-title"/>
        <label for="edit-dueDate">Due Date</label>
        <input value="${dueDate.value}" type="date" id="edit-dueDate" />
        <label for="edit-priority">Priority</label>
        <select name="priority" id="edit-priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <label for="edit-description">Description</label>
        <textarea name="textarea" rows="5" cols="30" id="edit-description">${description.value}</textarea>
        <button type="submit">Save</button>
        `;
    const editTitle = editForm.querySelector("#edit-title");
    const editDueDate = editForm.querySelector("#edit-dueDate");
    const editPriority = editForm.querySelector("#edit-priority");
    const editDescription = editForm.querySelector("#edit-description");

    mainContainer.appendChild(editForm);

    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const todo = new Todo(
        editTitle.value,
        editDueDate.value,
        editPriority.value,
        editDescription.value
      );

      project.todoList.splice(todoIndex, 1, todo);
      renderTodos(projectId);
      mainContainer.removeChild(editForm);
    });
  }
}

export { editTodo };
