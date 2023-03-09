import axios from "axios";
import Footer from "../components/Footer";
import { useEffect, useState } from "../lib"
import MenuAdmin from "./MenuAdmin";

const Contactlistadmin = ()=>{
    const [contact, setcontact] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/contact").then(({data})=>setcontact(data))
    },[])
    useEffect(()=>{
        const btn_delete = document.querySelectorAll(".btn_delete");
        for(let btn of btn_delete){
            btn.addEventListener("click", function(){
                const idOr = this.dataset.id;
                console.log(idOr);
                axios.delete(`http://localhost:3000/contact/${idOr}`)
                .then(()=> {
                    const newProject = contact.filter((item)=> item.id != idOr);
                    setcontact(newProject)
                })
            })
        }
    })
    return `
    ${MenuAdmin()}
    <br><br><br><br>
    <h2 class="my" style="text-align : center">MY PROJECT</h2>
    <table class="tb">
        <tr>
            <td style="width: 100px;">STT</td>
            <td style="width: 250px;">NAME</td>
            <td style="width: 150px;">EMAIL</td>
            <td style="width: 150px;">MESSAGE</td>

        </tr>
        ${contact.map(function(item, index){
          return `
        <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td style="width:700px">${item.message}</td>
            <td>
            <button data-id=${item.id} class="bg-red-600 p-2 py-2 text-[#ffff] btn_delete">DELETE</button>
            </td>
        </tr>
        `
      }).join("")}
    </table>

${Footer()}`
}
export default Contactlistadmin



