// SectionNav.js
import React from "react";
import NavLink from "../../header/navlink/Navlink";

function SectionNav() {
  return (
    <div className="flex justify-between items-center  p-4 rounded-lg font-montserrat">
      <h4 className="text-xl text-2xl"> New Products</h4>
      <nav className="flex space-x-8">
        <NavLink href="#all">All </NavLink>
        <NavLink href="#new">Women's</NavLink>
        <NavLink href="#bestsellers">Men's</NavLink>
        <NavLink href="#discounts">Accessories</NavLink>
        <NavLink href="#discounts">Cosmetics</NavLink>
      </nav>
    </div>
  );
}

export default SectionNav;
