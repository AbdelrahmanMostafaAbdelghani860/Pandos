import React from "react";
import styles from "./Discountcounter.module.css";
function Discountcounter() {
  return (
    <div className="container flex my-4 p-6 mx-auto justify-center">
      <div className="">
        <img src="/discount.jpg" />
      </div>
      <div className=" flex bg-gray-100 p-16 justify-center ">
        <h3
          className={` ${styles.discount}  text-4xl text-center  font-cookie_regular   `}>
          Summer 2024 discount
        </h3>
      </div>
    </div>
  );
}

export default Discountcounter;
