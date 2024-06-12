import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar" data-aos="fade-"
      data-aos-duration="1000">
        <div className="left nav-items">Portfolio</div>
        <div className="right ubaid">
          <a href="#home" className="nav-items">Home</a>
          <a href="#experience" className="nav-items">Experience</a>
          <a href="#skills" className="nav-items">Skills</a>
          <a href="#projects" className="nav-items">Project</a>
          <a href="#contact" className="nav-items">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
