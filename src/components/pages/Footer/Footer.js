import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="Contact Me">
      <div className="icons">
        <a href="mailto:izzymagallonworks@gmail.com">
          <i className="fas fa-envelope-open-text"></i>
        </a>
        <a href="https://github.com/imagallon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/israel-magallon-5951b3214/">
          <i className="fab fa-linkedin"></i>
        </a>
        {/* <a href="./assets/img/Coding Resume 2021v1.1.pdf" download>
          <i className="fas fa-paperclip paper"></i>
        </a> */}
        <p className="company-name">IEM &copy; 2021, ALL Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
