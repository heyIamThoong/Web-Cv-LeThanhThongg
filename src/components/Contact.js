import axios from "axios";
import { router, useEffect } from "../lib"

const Contact = ()=>{
  useEffect(function(){
    const form = document.querySelector("#formcontact");
    const nameContact = document.querySelector("#name");
    const emailContact = document.querySelector("#email");
    const mes = document.querySelector("#mes");

    form.addEventListener("submit", function(e){
      e.preventDefault();
      const contactAdd = 
      {
        name: nameContact.value, 
        email : emailContact.value,
        message : mes.value
      }
      console.log(contactAdd);
      axios.post("http://localhost:3000/contact", contactAdd )
      .then(()=> alert("Thành Công"))
      .catch(()=> alert("Add to Fail !"))
    })
  })
    return `
    <form action="https://formspree.io/youremail@example.com" id="formcontact" >
    <div class="row no-gutters">
      <div class="col-lg-6 col-md-12 col-sm-12 tf-contact-col">
        <input class="bg-light form-control" type="text" name="name" placeholder="*Name" id="name" required="required"/>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 pb-2">
        <input class="bg-light form-control" type="email" name="_replyto" placeholder="*Your Email Address" id="email" required="required"/>
      </div>
    </div>
    <div class="row pb-2 no-gutters">
      <div class="col-md-12 col-sm-12">
        <textarea class="bg-light mb-2 form-control" name="message" placeholder="*Your Message" rows="5" id="mes" required="required"></textarea>
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
  `
}
export default Contact