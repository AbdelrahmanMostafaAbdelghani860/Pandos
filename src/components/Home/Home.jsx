import React from "react";
import Newproduct from "./newproduct/Newproduct";
import ImageSlider from "./imageSlider/Imageslider";
import Servicesection from "./Servicessection/Servicesection";
import CategoryPrev from "./categoryprev/Categoryprev";
import Discountcounter from "./discountcounter.jsx/Discountcounter";

function Home() {
  return (
    <>
      <CategoryPrev />
      <Newproduct />
      <ImageSlider />
      <Servicesection />
      <Discountcounter />
    </>
  );
}

export default Home;
