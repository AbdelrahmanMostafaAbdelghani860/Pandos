import React, { useState } from "react";
import SectionNav from "../sectionnav/Sectionnav";
import ProductCard from "../productcard/Productcard";

const products = [
  {
    id: 1,
    category: "all",
    image: "/product-1.jpg",
    title: "Buttons tweed blazer",
    description:
      "Perfect for any season, this stylish jacket offers both comfort and versatility. Its sleek design complements any outfit.",
    price: "30",
  },
  {
    id: 2,
    category: "womens",
    image: "/product-2.jpg",
    title: "Fit micro corduroy shirt",
    description:
      "This lightweight dress features a floral pattern ideal for warm weather. Stay cool and fashionable all summer long.",
    price: "25",
  },
  {
    id: 3,
    category: "mens",
    image: "/product-3.jpg",
    title: "Slim striped pocket shirt",
    description:
      "Experience superior comfort and performance with our latest running shoes. Designed for athletes, built for everyone.",
    price: "44",
  },
  {
    id: 4,
    category: "accessories",
    image: "/product-4.jpg",
    title: "Cotton T-shirt",
    description:
      "Elevate your wardrobe with this sophisticated and chic blouse. Perfect for both work and casual outings.",
    price: "55",
  },
  {
    id: 5,
    category: "mens",
    image: "/product-5.jpg",
    title: "Product 5",
    description:
      "These jeans offer a modern fit and durable fabric for everyday wear. Style and durability meet in this wardrobe essential.",
    price: "39",
  },
  {
    id: 6,
    category: "womens",
    image: "/product-6.jpg",
    title: "Contrasting sunglasses",
    description:
      "Stay warm and stylish with this ultra-soft and cozy sweater. Ideal for layering during chilly days and nights.",
    price: "32",
  },
  {
    id: 7,
    category: "mens",
    image: "/product-7.jpg",
    title: "Product 7",
    description:
      "Crafted from genuine leather, this wallet combines style and functionality. Keep your essentials organized with ease.",
    price: "21",
  },
  {
    id: 8,
    category: "accessories",
    image: "/product-8.jpg",
    title: "Product 8",
    description:
      "This trendy handbag is perfect for both casual outings and formal events. Spacious and stylish, it complements any attire.",
    price: "23",
  },
];

function ProductSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleNavClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" || product.category === selectedCategory
  );

  return (
    <div className="container mx-auto p-4 mt-16">
      <SectionNav onNavClick={handleNavClick} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id} // Ensure unique key prop
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
