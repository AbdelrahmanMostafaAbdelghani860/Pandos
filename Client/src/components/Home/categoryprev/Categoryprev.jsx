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
          <h2 className="text-2xl font-bold">Women</h2>
          <a href="/product" className={`mt-2 ${styles.navLink}`}>
            Learn More
          </a>
          <p className="mt-2">
            Elevate your style with our chic and trendy women's clothing and
            accessories.
          </p>
        </div>
      </div>
      <ImageCard
        src="/category-2.jpg"
        title="Men"
        link="/product"
        description="Discover the latest trends our stylish collection for men."
      />
      <ImageCard
        src="/category-3.jpg"
        title="Accessories"
        link="/product"
        description="Complete your look with our diverse selection of accessories."
      />
      <ImageCard
        src="/category-4.jpg"
        title="Cosmetics"
        link="/product"
        description="Enhance your beauty with our cosmetics and skincare products."
      />
      <ImageCard
        src="/category-5.jpg"
        title="Kids"
        link="/product"
        description="Find adorable outfits for your little ones in our kids' clothing."
      />
    </div>
  );
}

export default CategoryPrev;
