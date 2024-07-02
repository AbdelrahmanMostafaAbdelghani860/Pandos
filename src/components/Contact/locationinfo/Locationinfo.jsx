import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaHeadphones } from "react-icons/fa";

function LocationInfo() {
  return (
    <div className="bg-white  mt-16 p-10 dark:bg-[#1f2937] dark:text-[#d1d5db]">
      <h2 className="text-2xl font-semibold  mb-6 ">Our Location</h2>
      <div className=" font-semibold">
        <h2 className="my-2 mt-4">
          <FaMapMarkerAlt className="inline-block mr-3 mb-1 text-[#ca1515]" />
          Address
        </h2>
        <p className="text-gray-400">Lohmühlenstraße 65, 12435 Berlin</p>
        <h2 className="my-2  mt-6">
          <FaPhoneAlt className="inline-block mr-3 mb-1 text-[#ca1515] text-12" />
          Phone
        </h2>

        <p className="text-gray-400"> (+49) 17-666 391 21 </p>
        <h2 className="my-2  mt-6">
          <FaHeadphones className="inline-block mr-3 mb-1  text-[#ca1515]" />
          Support{" "}
        </h2>
        <p className="text-gray-400"> ashour.abdelrahman@gmx.de </p>
      </div>
      <h2 className="text-2xl font-semibold  my-8 ">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-[#d1d5db] text-sm font-bold mb-2"
            htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515] dark:bg-[#374151]"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm dark:text-[#d1d5db] font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515] dark:bg-[#374151]"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-[#d1d5db] text-sm font-bold mb-2"
            htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515] dark:bg-[#374151]"
            id="message"
            placeholder="Your Message"
            rows="4"></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#ca1515] hover:bg-red-600 text-white font-bold py-2 px-4 rounded   focus:outline-none rounded-xl	 focus:shadow-outline"
            type="button">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default LocationInfo;
