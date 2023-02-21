import axios from "axios";
import { router, useEffect } from "../lib"

const projectAddAdmin = () => {
  useEffect(function () {
    const form = document.querySelector("#form");
    const nameProject = document.querySelector("#name");
    const dateProject = document.querySelector("#date");
    const language = document.querySelector("#language");
    const linkgit = document.querySelector("#linkgit");
    const describe = document.querySelector("#describe");
    const image = document.querySelector("#image");
    form.addEventListener("submit",async function (e) {
      e.preventDefault();
      const urls = await uploadFiles(image.files);
      const projectAdd =
      {
        name: nameProject.value,
        date: dateProject.value,
        linkgit: linkgit.value,
        language: language.value,
        describe: describe.value,
        gallery : urls
      }
      axios.post("http://localhost:3000/APIproject", projectAdd)
        .then(() => router.navigate("/admin/projectListAdmin"))
        .catch(() => alert("Add to Fail !"))
    })
  })
  const uploadFiles = async (files) => {
    const CLOUD_NAME = "ds97vobzg";
    const PRESET_NAME = "cv-online-upload";
    const FOLDER_NAME = "ECMA";
    const urls = [];
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME)
    formData.append("folder", FOLDER_NAME)

    for (const file of files) {
      formData.append("file", file)
      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      })
      urls.push(response.data.secure_url)
    }
    return urls


  }
  return `
    <div class="conteiner">
        <h2 class="add">ADD PROJECT</h2>
        <a class="anek" href="#/admin/projectListAdmin">LIST</a>
        <a class="anek" href="/">HOME</a> 
        <br> <br> <br>
        <form id="form" class="form" action="">
            <div>
                <label for="">Name Project</label>
                <br>
                <input class="ipt" id="name" type="text">
            </div>
            <div>
                <label for="">Date</label>
                <br>
                <input id="date"  type="text">
            </div>
            <div>
                <label for="">Language Use</label>
                <br>
                <input id="language" type="text">
            </div>
            <div>
                <label for="">Link GitHub</label>
                <br>
                <input id="linkgit" type="text">
            </div>
            <div>
                <label for="">Describe</label>
                <br>
                <input id="describe" type="text">
            </div>
            <div>
                <label for="">Image</label>
                <br>
                <input class="inp-file" multiple id="image" type="file">
            </div>
            <br>
            <div class="">
            <input type="submit"
                class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
        </div>
        </form><br><br>
        
    </div>
  `
}
export default projectAddAdmin