import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../../Layout/header/Mainheader.module.css";

function NavbarBarItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      className={`${styles.navLink} dark:text-[#d1d5db]`}
      onClick={onClick}>
      {children}
    </NavLink>
  );
}

export default NavbarBarItem;
