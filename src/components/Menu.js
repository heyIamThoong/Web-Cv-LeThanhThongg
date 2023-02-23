
import { useState , useEffect } from "../lib";
const Menu = () => {
  return `
  <style> .tf-header { 
    height : 10px !important;
  } </style>
  <header class="tf-header"  >
      <nav style= "background-color :	#454545 ; position : fixed ; width :100% ; z-index: 2;" class="navbar py- navbar-dark">
        <div class="container">
          <h1><a class="navbar-brand" href="/">dev<span style="color : #FF3333">lethanhthong</span></a></h1>
          <div id="navbar">
            <ul class="nav pull-right">
            <li  class="nav-item"><a class="nav-link" id="nav" href="#/">HOME</a></li>
            <li  class="nav-item"><a class="nav-link" id="nav" href="#/admin/login">ADMIN</a></li>
            </ul>
          </div>
        </div>
      </nav><br><br>
    </header>`
}

export default Menu