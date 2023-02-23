import axios from "axios";
import Footer from "../components/Footer";
import { useEffect, useState } from "../lib"
import MenuAdmin from "./MenuAdmin";

const InformationListAdmin = ()=>{
    const [information, setinformation] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/information").then(({data})=>setinformation(data))
    },[])
    return `
    ${MenuAdmin()}
    <br><br><br><br>
    <h2 class="my" style="text-align : center">InformationList</h2>
    <table class="tb">
        <tr>
            <td style="width: 250px;">NAME</td>
            <td style="width: 150px;">HỌC VẤN</td>
            <td style="width: 150px;">SKILL</td>
            <td style="width: 300px;">LANGUAGE</td>
            <td style="width: 300px;">Framework</td>
        </tr>
        ${information.map(function(item , index){
          return `
        <tr>
        <td style="width: 250px;">${item.name}</td>
        <td style="width: 150px;">${item.hocVan}</td>
        <td style="width: 150px;">${item.shill}</td>
        <td style="width: 300px;">${item.language}</td>
        <td style="width: 300px;">${item.framework}</td>
            <td>
            <a class="chan" href="#/admin/information/${item.id}" class="bg-blue-900 p-5 py-2 text-[#ffff]">SETTING</a>
            </td>
        </tr>
        `}).join("")}
        
        <tr>
        
            <td style="width: 300px;">ADDRESS</td>
            <td style="width: 300px;">PHONE</td>
            <td style="width: 300px;">EMAIL</td>
            <td style="width: 300px;">FACEBOOk</td>
            <td style="width: 300px;">IMAGE</td>
        </tr>
        ${information.map(function(item , index){
            return `
        <tr>
       
        <td style="width: 300px;">${item.address}</td>
        <td style="width: 300px;">${item.phone}</td>
        <td style="width: 300px;">${item.email}</td>
        <td style="width: 300px;">ThanhThongg</td>
        <td>
            <a class="chan" href="#/admin/information/${item.id}" class="bg-blue-900 p-5 py-2 text-[#ffff]">SETTING</a>
            </td>
        </tr>
        `
      }).join("")}
    </table>

${Footer()}`
}
export default InformationListAdmin



