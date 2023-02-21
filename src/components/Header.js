
import axios from "axios";
import { useState , useEffect } from "../lib";
const Header = () => {
  const [image, setimages] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/images/5").then(({ data }) => setimages(data))
  }, [])
  return `
  <header class="tf-header" id="Home"  >
      <nav style= "background-color :	#454545 ; position : fixed ; width :100% ; z-index: 2;" class="navbar py- navbar-dark">
        <div class="container">
          <h1><a class="navbar-brand" href="/">dev<span style="color : #FF3333">lethanhthong</span></a></h1>
          <div id="navbar">
            <ul class="nav pull-right">
            <li  class="nav-item"><a class="nav-link" id="nav" href="#Home">Home</a></li>
            <li  class="nav-item"><a class="nav-link" id="nav" href="#project">Home</a></li>
            <li  class="nav-item"><a class="nav-link" id="nav" href="#contact">Home</a></li>
            <li  class="nav-item"><a class="nav-link" id="nav" href="#/admin/login">Home</a></li>

            </ul>
          </div>
        </div>
      </nav><br><br>
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-11">
            <h2 ">Hello,I'm 
            <br>Lê Thành Thông!</h2>
            <h4 >Một chút về tôi ! </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 col-sm-12">
            <p class="mt-4" style="font-weight : bold ;font-size : 18px">
          <span style="color: #00FF00 ;">Hiện tại</span>, mình đang là sinh viên kì 4 tại trường <span style="color: #FF3333 ; "> FPT Poltechnic </span>. Mình bắt đầu học lập trình từ tháng 10 năm ngoái và phần lớn thời gian trong ngày mình đều ngồi học.<span style="color: #00FF00 ; "> Ngoài việc học tập trên trường</span> thì mình thường xuyên học thêm trên <span style="color: #FF3333 ; ">F8 Fullstack</span> và trên các kênh <span style="color: #FF3333 ; "> Youtube </span>....</p>
            <p class="mt-4">Học vấn : FPT Polytechnic<br> Kỹ năng lập trình : Fontend deverloper<br>Quê quán : Ninh Bình<br>Tình trạng : Độc Thân </p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-3 col-sm-12"><a class="tf-header-heading-btn a btn btn-primary btn-block mt-1" href="https://drive.google.com/file/d/1i-jApHYMx9hLeOlhwGLla-eW0sfV-yMj/view?usp=sharing">My Resume CV</a></div>
        </div>
        <div ><img style="width : 450px ;height : 420px; position : relative ; left :700px ; bottom : 460px ; border-radius : 75px" src="${image.gallery}"></div>
      </div>
    </header>`
}

export default Header