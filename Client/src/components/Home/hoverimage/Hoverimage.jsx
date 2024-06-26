import React from "react";
import styles from "./Hoverimage.module.css";
import { FaInstagram } from "react-icons/fa";

function Hoverimage({ imageSrc, hoverText }) {
  return (
    <div className={`${styles.icon_text_container} `}>
      <img
        src={imageSrc}
        alt="Hover"
        className={`w-full h-full  ${styles.hoverImage}`}
      />
      <span className={`${styles.hoverText} dark:text-[#d1d5db]`}>
        {hoverText}
      </span>
      <a
        href="https://www.instagram.com/pandos_eg"
        className={styles.hoverText_2}
        target="_blank">
        <FaInstagram className="dark:text-[#d1d5db]" />
      </a>
    </div>
  );
}

export default Hoverimage;
