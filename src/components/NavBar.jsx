import React from 'react';
import { Link } from 'react-scroll';
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand" style={{ width: "100%", padding: 0, margin: 0 }}>
      <div className="container-fluid" id='nav'>
        <a className="navbar-brand" href="#" id='nav-logo'>Mohit</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
            <Link className="nav-link" to="experience" smooth={true} duration={500}>Experience</Link>
            <Link className="nav-link" to="project" smooth={true} duration={500}>Project</Link>
            <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
