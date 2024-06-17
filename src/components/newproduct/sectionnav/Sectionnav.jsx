import React from "react";
import NavbarItem from "../../header/navlink/NavbarItem"; // Ensure this path is correct

function SectionNav({ onNavClick }) {
  return (
    <div className="flex justify-between items-center p-4 rounded-lg font-montserrat">
      <h4 className="text-2xl">New Products</h4>
      <nav className="flex space-x-8">
        <NavbarItem to="/all" onClick={() => onNavClick("all")}>
          All
        </NavbarItem>
        <NavbarItem to="/new" onClick={() => onNavClick("womens")}>
          Women's
        </NavbarItem>
        <NavbarItem to="/bestsellers" onClick={() => onNavClick("mens")}>
          Men's
        </NavbarItem>
        <NavbarItem to="/accessories" onClick={() => onNavClick("accessories")}>
          Accessories
        </NavbarItem>
      </nav>
    </div>
  );
}

export default SectionNav;
