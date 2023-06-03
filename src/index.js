import "./style.css";
import { clickEvents } from "./clickEvents";
import { renderProjects } from "./renderProjects";
import { createProject, projectList } from "./addProject";

clickEvents();
createProject("Default Project"); //default project
renderProjects();
