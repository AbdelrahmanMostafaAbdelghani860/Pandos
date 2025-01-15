import React from "react";
import Newproduct from "./newproduct/Newproduct";
import ImageSlider from "./imageSlider/Imageslider";
import Servicesection from "./Servicessection/Servicesection";
import CategoryPrev from "./categoryprev/Categoryprev";
import Discountcounter from "./discountcounter.jsx/Discountcounter";
import Hoverimage from "./hoverimage/Hoverimage";

function Home() {
  const images = [
    { src: "/insta-1.jpg" },
    { src: "/insta-2.jpg" },
    { src: "/insta-3.jpg" },
    { src: "/insta-4.jpg" },
    { src: "/insta-5.jpg" },
  ];
  return (
    <>
      <CategoryPrev />
      <Newproduct />
      <ImageSlider />
      <Servicesection />
      <Discountcounter />
      <div className=" flex w-full  items-center justify-center">
        <div className="flex w-full">
          {images.map((image, index) => (
            <Hoverimage
              key={index}
              imageSrc={image.src}
              hoverText={"@pandos_ege"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
