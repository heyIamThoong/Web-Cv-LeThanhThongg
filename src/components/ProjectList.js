import ProjectItem from "./ProjectItem";

const ProjectList = ({ APIproject }) => {
 
  return `${APIproject?.map((APIproject) => ProjectItem({ project })).join("")}`;
};
export default ProjectList;
