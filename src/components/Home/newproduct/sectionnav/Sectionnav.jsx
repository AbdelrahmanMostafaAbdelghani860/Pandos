import React from "react";
import NavbarItem from "../../../Layout/header/navlink/NavbarItem"; // Ensure this path is correct

function SectionNav({ onNavClick }) {
  return (
    <div className="flex justify-between items-center p-4 rounded-lg font-montserrat">
      <h4 className="text-2xl">New Products</h4>
      <nav className="flex space-x-8">
        <NavbarItem to="/" onClick={() => onNavClick("all")}>
          All
        </NavbarItem>
        <NavbarItem to="/" onClick={() => onNavClick("womens")}>
          Women's
        </NavbarItem>
        <NavbarItem to="#" onClick={() => onNavClick("mens")}>
          Men's
        </NavbarItem>
        <NavbarItem to="#" onClick={() => onNavClick("accessories")}>
          Accessories
        </NavbarItem>
      </nav>
    </div>
  );
}

export default SectionNav;
