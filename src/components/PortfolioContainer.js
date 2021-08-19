import React, { useState } from "react";
import NavTabs from "./pages/NavTabs/NavTabs";
import Aboutme from "./pages/Aboutme/Aboutme";
import Projects from "./pages/Projects/Projects";

import Contact from "./pages/Constact/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Aboutme");

  // This function is checking to see what the value of `currentPage` is.
  // Depending on the value of currentPage, we return the corresponding
  // component to render.
  const renderPage = () => {
    switch (currentPage) {
      case "Aboutme":
        return <Aboutme />;

      case "Projects":
        return <Projects />;

      // case "Resume":
      //   return <Resume />;

      default:
        return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
