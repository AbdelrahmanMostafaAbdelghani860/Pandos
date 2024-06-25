import React from "react";
import styles from "./Discountcounter.module.css";
function Discountcounter() {
  return (
    <div className="container flex my-4 p-6 mx-auto justify-center">
      <div className="">
        <img src="/discount.jpg" />
      </div>
      <div className=" flex bg-gray-100 p-16 justify-center w-[585px] ">
        <div>
          <p className="text-center text-xl dark:text-black">Discount</p>
          <h2
            className={`${styles.discount} font-cookie_regular text-6xl text-center`}>
            Summer 2024
          </h2>
          <p className="text-center text-2xl dark:text-black">
            Sale <span className="text-[#ca1515] font-semibold">50%</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Discountcounter;
