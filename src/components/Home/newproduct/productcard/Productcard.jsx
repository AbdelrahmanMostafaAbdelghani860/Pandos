import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

function ProductCard({ image, title, price, description }) {
  const [isHeartRed, setHeartRed] = useState(false);
  const [isCartRed, setCartRed] = useState(false);
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-1000 text-center flex flex-col justify-between h-full">
      <img src={image} alt={title} className="w-full" />
      <p className="p-3 font-semibold text-[#ca1515]"> {title} </p>
      <p className="text-gray-500	">{description}</p>
      <p className="p-3 b-0 "> €{price} </p>

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-4">
          <FaHeart
            className={` ${
              isHeartRed ? "text-red-500 " : "text-white"
            } text-2xl transform translate-y-12  transition-transform duration-300 cursor-pointer`}
            onClick={() => {
              setHeartRed(!isHeartRed);
            }}
          />
          <FaShoppingCart
            className={` ${
              isCartRed ? "text-red-500 " : "text-white"
            } text-2xl transform translate-y-12  transition-transform duration-300 cursor-pointer`}
            onClick={() => {
              setCartRed(!isCartRed);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;