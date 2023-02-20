import instance from "./config";

const getProjects = () => {
  return instance.get("/APIproject");
};

const getProject = (id) => {
  return instance.get(`/APIproject/${id}`);
};

const addProject = (project) => {
  return instance.post(`/APIproject`, project);
};

const updateProject = (project) => {
  return instance.put(`/APIproject/${project.id}`, project);
};

const deleteProject = (id) => {
  return instance.delete(`/APIproject/${id}`);
};

export { getProjects, deleteProject, getProject, addProject, updateProject };
