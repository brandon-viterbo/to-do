import { createProject } from "./project";
import { removeNamedElemant } from "./utils";

export const userProjects = (function() {
  const projects = [];

  const getProjects = () => projects;
  const addProject = (project) => projects.push(project);
  const removeProject = (projectName) => removeNamedElemant(projects, projectName); 

  return { getProjects, addProject, removeProject, }
})();