import React,{useEffect} from 'react'
import logo from '../1.jpg'
import Demo from '../components/cropper'
import Cropper from 'react-cropper';

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
        <div class="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <button class="dropdown-btn" onClick={handle}>Dropdown 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-container">
          <form action="#">
        <p class="range-field">
          <input type="range" />
          </p>
          <input type="range" />
          <p class="range-field">
          <input type="range" />
          </p>
          <p class="range-field">
          <input type="range" />
          </p>
          </form>
        </div>
        <a href="#contact">Search</a>
      </div>
      
</>
    )
}
