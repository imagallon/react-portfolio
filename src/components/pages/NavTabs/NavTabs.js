import React from "react";
import "./Nav.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav justify-content-end ">
      <h1>Israel Magallon</h1>
      <li className="nav-item">
        <a
          href="#Aboutme"
          onClick={() => handlePageChange("Aboutme")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Aboutme"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Aboutme" ? "nav-link active" : "nav-link"}
        >
          About me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Projects"
          onClick={() => handlePageChange("Projects")}
          // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item nav-link">
        <a href={process.env.PUBLIC_URL + "/codingresume2021v1.1.pdf"} download>
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
