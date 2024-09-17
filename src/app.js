import { createProject } from "./project";
import { removeNamedElemant } from "./utils";

export const userProjects = (function() {
  const projects = [];

  const getProjects = () => projects;
  const addProject = (projectName) => projects.push(createProject(projectName));
  const removeProject = (projectName) => removeNamedElemant(projects, projectName); 

  return { getProjects, addProject, removeProject, }
})();