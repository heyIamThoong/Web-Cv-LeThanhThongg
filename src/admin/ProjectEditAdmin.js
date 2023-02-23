import axios from "axios";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { router, useEffect, useState } from "../lib"
import MenuAdmin from "./MenuAdmin";

const projectEditAdmin = ({ id }) => {
    const [project, setProject] = useState({});
    useEffect(function () {
        axios.get(`http://localhost:3000/APIproject/${id}`).then(({ data }) => setProject(data))
    }, [])
    useEffect(function () {
        const form = document.querySelector("#form");
        const nameProject = document.querySelector("#name");
        const dateProject = document.querySelector("#date");
        const language = document.querySelector("#language");
        const linkgit = document.querySelector("#linkgit");
        const describe = document.querySelector("#describe");
        const image = document.querySelector("#image");


        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            let avatarUrl = "";
            image.files.length > 0
                ? (avatarUrl = await uploadFiles(image.files))
                : (avatarUrl = image.accept);
            const projectAdd =
            {
                id,
                name: nameProject.value,
                date: dateProject.value,
                linkgit: linkgit.value,
                language: language.value,
                gallery: avatarUrl,
                describe: describe.value,
            }
            axios.put(`http://localhost:3000/APIproject/${id}`, projectAdd)
                .then(() => router.navigate("/admin/projectListAdmin"))
                .catch(() => alert("Add to Fail !"))
        })
    })
    const uploadFiles = async (files) => {
        if (files) {
          const CLOUD_NAME = "dugodumc5";
          const PRESET_NAME = "mycv-upload";
          const FOLDER_NAME = "MyCV";
          const urls = [];
          const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    
          const formData = new FormData();
          formData.append("upload_preset", PRESET_NAME);
          formData.append("folder", FOLDER_NAME);
    
          for (const file of files) {
            formData.append("file", file);
            const response = await axios.post(api, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            urls.push(response.data.secure_url);
          }
          if (urls.length == 1) {
            return urls[0];
          } else {
            return urls;
          }
        }};
    return `
    ${MenuAdmin()}<br><br><br>
    <div class="conteiner">
        <h2 class="add">EDIT PROJECT</h2>
        <a class="anek" href="#/admin/projectListAdmin">LIST</a>  <br> <br> <br>
        <form id="form" class="form" action="">
            <div>
                <label for="">Name Project</label>
                <br>
                <input class="ipt" id="name" type="text" value="${project.name}">
            </div>
            <div>
                <label for="">Date</label>
                <br>
                <input id="date"  type="text" value="${project.date}">
            </div>
            <div>
                <label for="">Language Use</label>
                <br>
                <input id="language" type="text" value="${project.language}">
            </div>
            <div>
                <label for="">Link GitHub</label>
                <br>
                <input id="linkgit" type="text" value="${project.linkgit}">
            </div>
            <div>
                <label for="">Describe</label>
                <br>
                <input id="describe" type="text" value="${project.describe}">
            </div>
            <div>
            <label for="">Image</label>
            <br>
            <img style="width :300px" src="${project.gallery}"> <br>
            <input type="file"class="form-control" id="image" accept="${project.gallery}"
      />
        </div>
            <div>
        </div>
            <br>
            <div class="">
            <input type="submit"
                class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]" value="EDIT">
        </div>
        </form><br><br>
        
    </div>
    ${Footer()}
    `
}
export default projectEditAdmin