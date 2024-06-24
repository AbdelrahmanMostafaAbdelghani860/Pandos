import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className="dark:bg-[#111827] dark:text-[#d1d5db] dark:py-1 ">
      <div className={`${styles.container} dark:bg-[#374151] `}>
        <div className={`${styles.layer} bg-[#191919] dark:bg-red-900`}></div>
        <h2
          className={`${styles.header} text-3xl font-semibold dark:text-white`}>
          About Us
        </h2>
        <img src="/Logo.jpg" alt="Logo" className={styles.image} />
        <p className={`${styles.text} dark:text-white`}>
          Welcome to our website! We are dedicated to providing the best
          products and services to our customers. Our team works hard to ensure
          that you have a seamless shopping experience.
        </p>
        <p className={`${styles.text} dark:text-white`}>
          Our mission is to offer high-quality products at competitive prices.
          We believe in building long-lasting relationships with our customers
          through exceptional service and support.
        </p>
        <p className={`${styles.text} dark:text-white`}>
          Thank you for choosing us as your trusted shopping destination. We
          look forward to serving you!
        </p>
      </div>
    </div>
  );
}

export default About;
