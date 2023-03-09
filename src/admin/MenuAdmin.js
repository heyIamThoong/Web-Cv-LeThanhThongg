
const MenuAdmin = () => {
  return `
  <style> .tf-header { 
    height : 10px !important;
  } </style>
  <header class="tf-header"  >
      <nav style= "background-color :	#454545 ; position : fixed ; width :100% ; z-index: 2;" class="navbar py- navbar-dark">
        <div class="container">
          <h1><a class="navbar-brand" href="/">dev<span style="color : #FF3333">lethanhthongADMIN</span></a></h1>
          <div id="navbar">
            <ul class="nav pull-right">
            
            <li  class="nav-item"><a class="nav-link" id="nav" href="#/admin/projectListAdmin">Project</a></li>
            <li  class="nav-item"><a class="nav-link" id="nav" href="#/admin/information">Information</a></li>
            <li  class="nav-item"><a class="nav-link" id="nav" href="#/admin/contactlistadmin">Contact</a></li>
            <li  class="nav-item"><a class="nav-link" id="nav" href="#/">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav><br><br>
    </header>`
}

export default MenuAdmin