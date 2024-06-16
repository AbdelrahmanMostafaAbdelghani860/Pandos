// ProductSection.js
import React from "react";
import SectionNav from "../sectionnav/Sectionnav";
import ProductCard from "../productcard/Productcard";

function ProductSection() {
  const products = [
    {
      image: "/path-to-your-product1.jpg",
      title: "Product 1",
      description: "Description for product 1",
    },
    {
      image: "/path-to-your-product2.jpg",
      title: "Product 2",
      description: "Description for product 2",
    },
    {
      image: "/path-to-your-product3.jpg",
      title: "Product 3",
      description: "Description for product 3",
    },
    {
      image: "/path-to-your-product4.jpg",
      title: "Product 4",
      description: "Description for product 4",
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-16">
      <SectionNav />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
