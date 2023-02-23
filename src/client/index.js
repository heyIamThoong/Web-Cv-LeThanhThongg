import axios from "axios"
import { useEffect, useState } from "../lib";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Category from "../components/Category";
import Footer from "../components/Footer";
const HomePage = () => {

  const [project, setProject] = useState([]);
  const [information, setinformation] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/information").then(({ data }) => setinformation(data))
  }, [])
  useEffect(() => {
    axios.get("http://localhost:3000/APIproject").then(({ data }) => setProject(data))
  }, [])
  const [a, seta] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/images/2").then(({ data }) => seta(data))
  }, [])
  const [b, setb] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/images/3").then(({ data }) => setb(data))
  }, [])
  const [c, setc] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/images/4").then(({ data }) => setc(data))
  }, [])
  return `
  ${Header()}
    <div class="page-content">  
      <div>
      <div class="introduction">
       <hr>
<div id="project" class="tf-work-section">
  <div class="container" >
    <h2 class="h3" class="col-blue">List ProJect</h2>
  </div>
  <div class="container">
    <div class="row">
    ${project.map(function (item) {
    return `
      <div class="col-md-3 col-sm-12 pt-2">
        <div class="card">
        <a href="#/projectInformation/${item.id}"><img  class="img-fluid card-img-top" src="${item.gallery}" alt="2-start-simple"/></a>
          <div class="card-body">
            <h5 class="">${item.name}</h5>
            <p class="text-muted">${item.language}</p>
            <p class="text-muted col-red"> <i class="fas fa-calendar-alt"></i>  ${item.date}</p>
            <a class="card-link" href="${item.linkgit}">View in GitHub</a>
          </div>
        </div>
      </div>`
  }).join("")}
    </div>
  </div>
</div>
<hr>
<div class="tf-contact-section">
  <div class="container" id="contact">
    <h2 class="h4">Contact Me</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <h3 class="h5">Contact us</h3>
        ${Contact()}
      </div>
      <div class="col-md-6 col-sm-12 float-right text-right">
       ${information.map((information) => `
       <h3 class="h5">Address</h3><span>${information.address}</span>
       <p></p>
       <h3 class="h5">Phone</h3>
       <span>${information.phone}</span><br> <br>
       <h3 class="h5">Email</h3>
       <span>${information.email}</span><br> <br>
       <h3 class="h5">Facebook</h3>
       <a href="${information.facebook}">https://www.facebook.com/thoongne.210703</a>  
       `)}
      </div>
    </div>
  </div>
</div></div>
    </div>
    <iframe style="width :78% ; margin : 30px 0px 0px 155px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.141220996293!2d105.81006091492891!3d20.98697549457931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad50cf69e111%3A0xb6bdce19e6c38428!2zVGhhbmggWHXDom4sIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1676652601234!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   ${Footer()}
  `
}

export default HomePage