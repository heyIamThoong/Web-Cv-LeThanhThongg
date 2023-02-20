import { useEffect , useState } from "../lib";
import axios from "axios";

const ProjectItem = ({ APIproject }) => {
  const [cate, setCate] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/categories/${APIproject.categoryId}`)
      .then(({ data }) => setCate(data));
  }, [APIproject]);

  return  `
  <div class="col-md-2 col-sm-12 pt-2">
        <div class="card"><img style="width :200px" class="img-fluid card-img-top" src="${cate.gallery}" alt="2-start-simple"/>
          <div class="card-body">
            <h5 class="">${cate.name}</h5>
            <p class="text-muted">${cate.language}</p>
            <p class="text-muted col-red"> <i class="fas fa-calendar-alt"></i>  ${cate.date}</p>
            <a class="card-link" href="${cate.linkgit}">View in GitHub</a>
          </div>
        </div>
      </div>`;
};

export default ProjectItem;