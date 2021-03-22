import React from 'react'
export default function Sidebar() {
  function handle() {
    var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
  }
  
    return (
      <>
        <div className="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <button className="dropdown-btn" onClick={handle}>Lights 
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          <form action="#">
        <p className="range-field">
          <input type="range" />
          </p>
          <input type="range" />
          <p className="range-field">
          <input type="range" />
          </p>
          <p className="range-field">
          <input type="range" />
          </p>
          </form>
        </div>
        <a href="#contact">Search</a>
      </div>
      
</>
    )
}
