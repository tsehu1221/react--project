import React from 'react'
import logo from "../component/logo.jpg"
import './Navb.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg text-warning  fixed-top bg-secondary " id="home">
 <div className='container'>
  
  <div className="container-fluid py-3 align-center ">
    <a className="navbar-brand" href="#"> < img  className='logo' src={logo} alt="" />  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent ">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0  ">
        <li className="nav-item">
          <a className="nav-link"  href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">Link</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#Home">about me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Home">serivce</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Home">how work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">portifolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="# About">contact us</a>
        </li>
        
      </ul>
      
    </div>
  </div>
  </div> 

</nav>





    </div>
  )
}

export default Navbar