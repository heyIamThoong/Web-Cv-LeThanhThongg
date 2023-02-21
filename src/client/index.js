import axios from "axios"
import { useEffect, useState } from "../lib";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Category from "../components/Category";
import Footer from "../components/Footer";
const HomePage = () => {

  const [project, setProject] = useState([]);
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
       
<div class="tf-work-section">
  <div class="container" id="project">
    <h2 class="h3" class="col-blue">List ProJect</h2>
  </div>
  <div class="container">
    <div class="row">
    ${project.map(function (item) {
    return `
      <div class="col-md-2 col-sm-12 pt-2">
        <div class="card"><img style="width :200px" class="img-fluid card-img-top" src="${item.gallery}" alt="2-start-simple"/>
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
<div class="tf-quotes-section">
  <div class="carousel slide mt-5" id="tf-carousel" data-ride="carousel">
    <ol class="carousel-indicators">
      <li class="active" data-target="#tf-carousel" data-slide-to="0"></li>
      <li data-target="#tf-carousel" data-slide-to="1"></li>
      <li data-target="#tf-carousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" style="background-image: url('${a.gallery}');">
        <div class="carousel-caption">
          <p class="slider-text-1">""Những người phát triển web tốt luôn tập trung vào trải nghiệm người dùng đầu tiên của mình!"</p>
          <p class="slider-text-2">Walter George<br>CEO, Founder of Gupply</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('${b.gallery}');">
        <div class="carousel-caption">
          <p class="slider-text-1">""Nếu bạn không có thể tạo ra một giao diện người dùng tốt, bạn sẽ không bao giờ trở thành một nhà phát triển web giỏi."
          "</p>
          <p class="slider-text-2">Nancy Young<br>Managing Director, Amazingly</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('${c.gallery}');">
        <div class="carousel-caption">
          <p class="slider-text-1">"Một trang web tốt phải trông giống như một trang web tốt và hoạt động giống như một trang web tốt."</p>
          <p class="slider-text-2">Glenn Harrold<br>Marketing Manager</p>
        </div>
      </div>
    </div><a class="carousel-control-prev" href="#tf-carousel" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#tf-carousel" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>
  </div>
</div>
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
        <h3 class="h5">Address</h3><span>Thanh Xuân Hà Nội</span>
        <p></p>
        <h3 class="h5">Phone</h3>
        <span>0359210703</span><br> <br>
        <h3 class="h5">Email</h3>
        <span>thongltph20702@fpt.edu.vn</span><br> <br>
        <h3 class="h5">Facebook</h3>
        <a href="https://www.facebook.com/thoongne.210703">https://www.facebook.com/thoongne.210703</a>
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