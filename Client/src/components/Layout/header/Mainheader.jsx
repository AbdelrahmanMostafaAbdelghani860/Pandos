import React, { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import SearchIcon from "./search/Search";
import Favourites from "./favouritesicons/Favourites";
import NavbarItem from "./navlink/NavbarItem";

function Mainheader() {
  const heartCount = 2;
  const cartCount = 3; // This will be updated from local storage in future

  return (
    <header className="fixed z-10 top-0 w-full bg-white text-black shadow-md dark:bg-[#1f2937] dark:text-[#d1d5db]">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="/Logo.jpg" alt="Logo" className="h-10 w-10 mr-3 " />
          <span className="text-l font-bold">Pando's</span>
        </div>
        <nav className="flex-1 flex justify-center space-x-4 dark:text-[#d1d5db] ">
          <NavbarItem to="/">Home</NavbarItem>
          <NavbarItem to="/about">About</NavbarItem>
          <NavbarItem to="/services">Services</NavbarItem>
          <NavbarItem to="/contact">Contact</NavbarItem>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="user" className="hover:text-gray-400">
            Login/Register
          </a>

          <Favourites icon={FaHeart} count={heartCount} />
          <Favourites icon={FaShoppingCart} count={cartCount} />
        </div>
      </div>
    </header>
  );
}

export default Mainheader;
