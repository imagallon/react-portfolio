import React from "react";
import "./Nav.css";

const style = {
  textDecoration: "none",
};
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      {/* <h1>Israel Magallon</h1> */}
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu ">
        <li>
          <a
            className="aColor"
            href="#Aboutme"
            onClick={() => handlePageChange("Aboutme")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Aboutme"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            // className={
            //   currentPage === "Aboutme" ? "nav-link active" : "nav-link"
            // }
          >
            About me
          </a>
        </li>
        <li>
          <a
            className="aColor"
            href="#Projects"
            onClick={() => handlePageChange("Projects")}
            // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            // className={
            //   currentPage === "Projects" ? "nav-link active" : "nav-link"
            // }
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="aColor"
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            // className={
            //   currentPage === "Contact" ? "nav-link active" : "nav-link"
            // }
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className="aColor"
            href={process.env.PUBLIC_URL + "/codingresume2021v1.1.pdf"}
            download
            style={style}
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavTabs;
