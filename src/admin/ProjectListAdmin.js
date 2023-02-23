import axios from "axios";
import Footer from "../components/Footer";
import { useEffect, useState } from "../lib"
import MenuAdmin from "./MenuAdmin";

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
    ${MenuAdmin()}
    <br><br><br><br>
    <h2 class="my" style="text-align : center">MY PROJECT</h2>
    <a class="anek" href="#/admin/projectAddAdmin">ADD</a>
    <table class="tb">
        <tr>
            <td style="width: 100px;">STT</td>
            <td style="width: 250px;">NAME PROJECT</td>
            <td style="width: 150px;">DATE</td>
            <td style="width: 150px;">LANGUAGE</td>
            <td style="width: 300px;">IMAGES</td>
            <td style="width: 300px;">ACTION</td>
        </tr>
        ${projects.map(function(item, index){
          return `
        <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>${item.date}</td>
            <td>${item.language}</td>
            <td><img style="width : 180px" class="img-fluid card-img-top" src="${item.gallery}" alt="2-start-simple"/></td>
            <td>${item.describe}</td>
            <td>
            <button onclick="return confirm_delete()" data-id=${item.id} class="bg-red-600 p-2 py-2 text-[#ffff] btn_delete">DELETE</button>
            <a class="chan" href="#/admin/projectEditAdmin/${item.id}" class="bg-blue-900 p-5 py-2 text-[#ffff]">SETTING</a>
            </td>
        </tr>
        `
      }).join("")}
    </table>

${Footer()}`
}
export default projectListAdmin



