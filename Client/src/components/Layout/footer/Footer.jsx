import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="w-full bg-[#ca1515] text-white relative   py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="mt-2">123 Main Street, Anytown, USA</p>
              <p className="mt-1">Email: info@example.com</p>
              <p className="mt-1">Phone: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold">Quick Links</h2>
              <ul className="mt-2">
                <li className="mt-1">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="mt-1">
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li className="mt-1">
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li className="mt-1">
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <h2 className="text-2xl font-semibold">Follow Us</h2>
              <div className="flex justify-center md:justify-end mt-2 space-x-4">
                <a
                  href="https://facebook.com"
                  className="hover:text-gray-300"
                  target="_blank">
                  <FaFacebook className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com"
                  className="hover:text-gray-300"
                  target="_blank">
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="https://instagram.com"
                  className="hover:text-gray-300"
                  target="_blank">
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
