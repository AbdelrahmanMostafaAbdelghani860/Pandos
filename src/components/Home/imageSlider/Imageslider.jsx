import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import styles from "../../Layout/header/Mainheader.module.css";
function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <div className="w-full flex mx-auto items-center justify-center  bg-homeslider bg-no-repeat lg:bg-repeat overflow-hidden ">
      <Slider {...settings} className="w-full ">
        <div className="flex items-center justify-center h-64 text-center mt-32  ">
          <div className="font-bold bg-white p-6 ">
            <p className="text-[#ca1515] font-bold bg-white 	font-normal ">
              Explore More About Summer Collection And Offers
            </p>
            <h1 className="text-center text-3xl  py-3 ">The Project Jacket</h1>
            <NavLink className={styles.navLink}> See More </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-center h-64 text-center mt-32  ">
          <div className="font-bold bg-white p-6 ">
            <p className="text-[#ca1515] font-bold bg-white 	font-normal ">
              Show More About Our Offers
            </p>
            <h1 className="text-center text-3xl py-3 ">Get Your Offer Now </h1>
            <NavLink className={styles.navLink}> See More </NavLink>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
