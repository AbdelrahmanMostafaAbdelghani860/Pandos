import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Mainheader.module.css";

function NavbarItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles.navLink} dark:text-[#d1d5db] ${
          isActive ? "text-[#ca1515] font-bold" : ""
        }`
      }
      onClick={onClick}>
      {children}
    </NavLink>
  );
}

export default NavbarItem;
