import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
    <h1>CONTACT ME</h1>
    <div
      className="contact-icon"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
    
      
      <a href="https://www.linkedin.com/in/mohamed-ubaid-mir-8a9649242/" target="_blank" className="items c-icons">
        <CiLinkedin className="icons" />
      </a>
     
      <a href="https://github.com/ubaid1321" target="_blank" className="items c-icons">
        <FaGithubSquare className="icons" />
      </a>
      <a  href="https://wa.me/7006688330?text=Hello%2C%20I'd%20like%20to%20know%20more%20about%20your%20services."
       target="_blank" className="items c-icons">
        <FaWhatsapp  className="icons" />
      </a>
      <a  href="tel:+917006688330"  target="_blank" className="items c-icons c-icons">
        <FaPhoneAlt  className="icons" />
      </a>
      <a
        href="mailto:ubaidmir623@gmail.com"
        target="_blank"
        className="items c-icons"
      >
        <SiGmail className="icons" />
      </a>
    </div>
  </div>
</>
  )
}

export default Contact
