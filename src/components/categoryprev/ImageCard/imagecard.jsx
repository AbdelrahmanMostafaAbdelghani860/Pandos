// ImageCard.js
import React from "react";
import styles from "../categoryprev.module.css";

function ImageCard({ src, title, link, description }) {
  return (
    <div className="relative group">
      <img src={src} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <a href={link} className={`mt-2 ${styles.navLink}`}>
          Learn More
        </a>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;
