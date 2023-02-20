import axios from "axios";
import { router, useEffect, useState } from "../lib"

const projectEditAdmin= ({id})=>{
    const [project, setProject] = useState({});
    useEffect(function(){
        axios.get(`http://localhost:3000/APIproject/${id}`).then(({data})=>setProject(data))
    },[])
    useEffect(function(){
        const form = document.querySelector("#form");
        const nameProject = document.querySelector("#name");
        const dateProject = document.querySelector("#date");
        const language = document.querySelector("#language");
        const linkgit = document.querySelector("#linkgit");
        const describe = document.querySelector("#describe");
        form.addEventListener("submit", function(e){
            e.preventDefault();
            const projectAdd =
            {
              name: nameProject.value,
              date: dateProject.value,
              linkgit: linkgit.value,
              language: language.value,
              gallery : project.gallery,
              describe: describe.value,
            }
            axios.put(`http://localhost:3000/APIproject/${id}`, projectAdd)
              .then(() => router.navigate("/admin/projectListAdmin"))
              .catch(() => alert("Add to Fail !"))
        })
    })
    return `
    <div class="conteiner">
        <h2 class="add">EDIT PROJECT</h2>
        <a class="anek" href="/">HOME</a>  <br> <br> <br>
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
export default projectEditAdmin