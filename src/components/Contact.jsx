import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from 'react-scroll';

const Contact = () => {
    return (
        <div id='contact'>
            <div className="head-content">
                <div className="head-content" style={{ marginTop: "-20px", width :"90vw" }}>
                    <p style={{ color: "gray", fontWeight: "600", fontSize: "20px" }}>Get in touch</p>
                    <h1 style={{ fontSize: "55px" }}>Contact Me</h1>
                </div>
            </div>
            <div className="contact-links">
               <div className="email">
               <MdOutlineMailOutline />
               <p>vipdaanav@gmail.com</p>
               </div>
               <div className="linkedin">
                
               <FaLinkedin />
                <p onClick={() => window.location.href = "https://www.linkedin.com/in/mohit-kumar-3a241935a/"}>Linkedin</p>
               </div>
            </div>
            <div class="container">
            <footer className="py-3 my-4" id='footer'>
  <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    <li className="nav-item">
      <Link className="nav-link px-2 text-body-secondary" to="about" smooth={true} duration={500}>
        About
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link px-2 text-body-secondary" to="experience" smooth={true} duration={500}>
        Experience
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link px-2 text-body-secondary" to="project" smooth={true} duration={500}>
        Project
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link px-2 text-body-secondary" to="contact" smooth={true} duration={500}>
        Contact
      </Link>
    </li>
  </ul>
  <p className="text-center text-body-secondary"> Copyright© 2024 Mohit , All right reserved</p>
</footer>

</div>
        </div>
    )
}

export default Contact