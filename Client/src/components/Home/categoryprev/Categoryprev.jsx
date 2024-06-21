import React from "react";
import ImageCard from "./ImageCard/imagecard";
import styles from "./categoryprev.module.css";

function CategoryPrev() {
  return (
    <div className="w-full mx-auto p-4 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="relative group col-span-1 sm:col-span-2 lg:col-span-2 row-span-2">
        <img
          src="/category-1.jpg"
          alt="Category 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
          <h2 className="text-xl font-bold">Category 1</h2>
          <a href="#link1" className={`mt-2 ${styles.navLink}`}>
            Learn More
          </a>
          <p className="mt-2">Description for category 1</p>
        </div>
      </div>
      <ImageCard
        src="/category-2.jpg"
        title="Category 2"
        link="category"
        description="Description for category 2"
      />
      <ImageCard
        src="/category-3.jpg"
        title="Category 3"
        link="#link3"
        description="Description for category 3"
      />
      <ImageCard
        src="/category-4.jpg"
        title="Category 4"
        link="#link4"
        description="Description for category 4"
      />
      <ImageCard
        src="/category-5.jpg"
        title="Category 5"
        link="#link5"
        description="Description for category 5"
      />
    </div>
  );
}

export default CategoryPrev;
