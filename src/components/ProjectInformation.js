
import Footer from './Footer'
import Menu from './Menu'
import { useEffect, useState } from '../lib';
import axios from 'axios';
const ProjectInformation = ({ id }) => {
  const [project, setProject] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3000/APIproject/${id}`).then(({ data }) => setProject(data))
  }, [])
  return `
  ${Menu()}
  <style type="text/css">
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
  }

  .container-1 {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 36px;
    color: #333;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .description {
    font-size: 16px;
    color: #666;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .image {
          width: 350px;
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .button {
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s ease;
  }

  .button:hover {
    background-color: #0069d9;
    cursor: pointer;
  }
</style>
<br><br><br><br>
<div class="container-1">
  <h1 style="text-align : center" class="title">Project Information</h1>
  <img  class="image" src="${project.gallery}" alt="Project Image">
  <p class="description">${project.describe}.</p>
  <ul class="ul">
          <li class="li">Name :${project.name}</li>
          <li class="li">Date :${project.date}</li>
          <li class="li">Language :${project.language}</li>
          <li class="li">LinkGit :<a href="${project.linkgit}">${project.linkgit}</a></li>
         
      </ul>
      
</div>
${Footer()}

  `
}
export default ProjectInformation