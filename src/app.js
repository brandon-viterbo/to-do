export const userProjects = (function() {
  const projects = [];

  const getProjects = () => projects;
  const addProject = (project) => projects.push(project);
  const removeProject = (projectIndex) => projects.splice(projectIndex, 1); 

  return { getProjects, addProject, removeProject, }
})();