import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.layer}></div>
      <h2 className={`${styles.header} text-3xl font-semibold`}>About Us</h2>
      <img src="/Logo.jpg" alt="Logo" className={styles.image} />
      <p className={styles.text}>
        Welcome to our website! We are dedicated to providing the best products
        and services to our customers. Our team works hard to ensure that you
        have a seamless shopping experience.
      </p>
      <p className={styles.text}>
        Our mission is to offer high-quality products at competitive prices. We
        believe in building long-lasting relationships with our customers
        through exceptional service and support.
      </p>
      <p className={styles.text}>
        Thank you for choosing us as your trusted shopping destination. We look
        forward to serving you!
      </p>
    </div>
  );
}

export default About;
