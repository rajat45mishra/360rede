import React from 'react'
export default function Sidebar() {
    return (
      <>
        <div className="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <a href="/">Lights:</a>
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
        <a href="#contact">Search</a>
      </div>
      
</>
    )
}
