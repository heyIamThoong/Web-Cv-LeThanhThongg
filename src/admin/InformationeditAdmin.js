import axios from "axios";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { router, useEffect, useState } from "../lib"
import MenuAdmin from "./MenuAdmin";

const InformationEditAdmin = ({ id }) => {
  const [information, setinformation] = useState({});
  useEffect(function () {
    axios.get(`http://localhost:3000/information/${id}`).then(({ data }) => setinformation(data))
  }, [])
  useEffect(function () {
    const form = document.querySelector("#form");
    const nameInfor = document.querySelector("#name");
    const hocVan = document.querySelector("#hocVan");
    const language = document.querySelector("#language");
    const shill = document.querySelector("#shill");
    const address = document.querySelector("#address");
    const framework = document.querySelector("#framework");

    const phone = document.querySelector("#phone");
    const email = document.querySelector("#email");
    const facebook = document.querySelector("#facebook");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const projectAdd =
      {
        name : nameInfor.value,
        hocVan :hocVan.value,
        shill : shill.value,
        language : language.value,
        framework :framework.value,
        address :address.value,
        phone :phone.value,
        email :email.value,
        facebook : facebook.value
      }
      axios.put(`http://localhost:3000/information/${id}`, projectAdd)
        .then(() => router.navigate("/admin/information"))
        .catch(() => alert("Add to Fail !"))
    })
  })
  return `
    ${MenuAdmin()}<br><br><br>
    <div class="conteiner">
        <h2 class="add">EDIT PROJECT</h2>
        <a class="anek" href="#admin/information">LIST</a>  <br> <br> <br>
        <form id="form" class="form" action="">
            <div>
                <label for="">Name </label>
                <br>
                <input class="ipt" id="name" type="text" value="${information.name}">
            </div>
            <div>
                <label for="">Học vấn</label>
                <br>
                <input id="hocVan"  type="text" value="${information.hocVan}">
            </div>
            <div>
                <label for="">Skill </label>
                <br>
                <input id="shill" type="text" value="${information.shill}">
            </div>
            <div>
                <label for="">Language </label>
                <br>
                <input id="language" type="text" value="${information.language}">
            </div>
            <div>
                <label for="">Framework</label>
                <br>
                <input id="framework" type="text" value="${information.framework}">
            </div>
            <div>
                <label for="">Address</label>
                <br>
                <input id="address" type="text" value="${information.address}">
            </div>
            <div>
            <label for="">Phone</label>
            <br>
            <input id="phone" type="text" value="${information.phone}">
            </div>
            <div>
            <label for="">Email</label>
            <br>
            <input id="email" type="text" value="${information.email}">
            </div>
            <div>
            <label for="">Facebook</label>
            <br>
            <input id="facebook" type="text" value="${information.facebook}">
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
export default InformationEditAdmin