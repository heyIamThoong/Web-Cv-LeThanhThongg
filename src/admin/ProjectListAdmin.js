import axios from "axios";
import { useEffect, useState } from "../lib"

const projectListAdmin = ()=>{
    const [projects, setProject] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/APIproject").then(({data})=>setProject(data))
    },[])
    useEffect(()=>{
        const btn_delete = document.querySelectorAll(".btn_delete");
        for(let btn of btn_delete){
            btn.addEventListener("click", function(){
                const idOr = this.dataset.id;
                console.log(idOr);
                axios.delete(`http://localhost:3000/APIproject/${idOr}`)
                .then(()=> {
                    const newProject = projects.filter((item)=> item.id != idOr);
                    setProject(newProject)
                })
            })
        }
    })
    return `
    <div class="conteiner">
    <h2 class="my">MY PROJECT</h2>
    <a class="anek" href="#/admin/projectAddAdmin">ADD</a>
    <a class="anek" href="/">HOME</a>
    <table class="tb">
        <tr>
            <td style="width: 100px;">STT</td>
            <td style="width: 250px;">NAME PROJECT</td>
            <td style="width: 150px;">DATE</td>
            <td style="width: 300px;">IMAGES</td>
            <td style="width: 300px;">ACTION</td>
        </tr>
        ${projects.map(function(item, index){
          return `
        <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>${item.date}</td>
            <td><img style="width : 180px" class="img-fluid card-img-top" src="${item.gallery}" alt="2-start-simple"/></td>
            <td>${item.describe}</td>
            <td>
            <button onclick="return confirm_delete()" data-id=${item.id} class="bg-red-600 p-2 py-2 text-[#ffff] btn_delete">DELETE</button>
            <a class="chan" href="/admin/projectEditAdmin/${item.id}" class="bg-blue-900 p-5 py-2 text-[#ffff]">SETTING</a>
            </td>
        </tr>
        `
      }).join("")}
    </table>
</div>`
}
export default projectListAdmin



