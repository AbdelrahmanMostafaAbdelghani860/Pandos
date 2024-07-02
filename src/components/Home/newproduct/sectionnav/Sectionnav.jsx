import React from "react";
import NavbarBarItem from "./Navlink";

function SectionNav({ onNavClick }) {
  return (
    <div className="flex justify-between items-center p-4 rounded-lg font-montserrat">
      <h4 className="text-2xl font-semibold">New Products</h4>
      <nav className="flex space-x-8">
        <NavbarBarItem to="/" onClick={() => onNavClick("all")}>
          All
        </NavbarBarItem>
        <NavbarBarItem to="/" onClick={() => onNavClick("womens")}>
          Women's
        </NavbarBarItem>
        <NavbarBarItem to="#" onClick={() => onNavClick("mens")}>
          Men's
        </NavbarBarItem>
      </nav>
    </div>
  );
}

export default SectionNav;
