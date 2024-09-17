import { createProject } from "./project";
import { removeNamedElemant } from "./utils";

const userProjects = (function() {
  const projects = [];

  const addProject = (projectName) => projects.push(createProject(projectName));
  const removeProject = (projectName) => removeNamedElemant(projects, projectName); 
})();