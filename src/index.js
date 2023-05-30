import "./style.css";
import { clickEvents } from "./clickEvents";
import { renderProjects } from "./renderProjects";
import { createProject } from "./addProject";

clickEvents();
createProject("Default Project"); //default project
renderProjects();
