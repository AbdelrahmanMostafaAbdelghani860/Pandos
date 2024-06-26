import React from "react";
import {
  FaShippingFast,
  FaRegMoneyBillAlt,
  FaHeadset,
  FaTags,
  FaShieldAlt,
  FaBoxOpen,
} from "react-icons/fa";

function Services() {
  return (
    <div className="container mx-auto pt-32 p-8">
      <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        <div className="bg-white shadow-md rounded-lg p-6 text-center dark:bg-[#374151]">
          <FaShippingFast className="text-5xl text-[#ca1515] mb-4 mx-auto dark:text-white" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-700 mb-4 dark:text-[#d1d5db] ">
            We offer quick and reliable delivery services to ensure your
            products arrive on time.
          </p>
          <img
            src="/services-1.jpg"
            alt="Fast Delivery"
            className="w-full h-48  rounded-md object-contain"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center dark:bg-[#374151]">
          <FaRegMoneyBillAlt className="text-5xl text-[#ca1515] mb-4 mx-auto dark:text-white" />
          <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
          <p className="text-gray-700 mb-4 dark:text-[#d1d5db]">
            Enjoy competitive pricing on all our products with great discounts
            and offers.
          </p>
          <img
            src="/services-2.jpg"
            alt="Affordable Prices"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center dark:bg-[#374151]">
          <FaHeadset className="text-5xl text-[#ca1515] mb-4 mx-auto dark:text-white" />
          <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
          <p className="text-gray-700 mb-4 dark:text-[#d1d5db]">
            Our support team is available around the clock to assist you with
            any inquiries.
          </p>
          <img
            src="/services-3.jpg"
            alt="Customer Support"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center dark:bg-[#374151]">
          <FaTags className="text-5xl text-[#ca1515] mb-4 mx-auto dark:text-white" />
          <h3 className="text-xl font-semibold mb-2">Special Discounts</h3>
          <p className="text-gray-700 mb-4 dark:text-[#d1d5db]">
            We offer special discounts and deals for our loyal customers.
          </p>
          <img
            src="/services-4.png"
            alt="Special Discounts"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center dark:bg-[#374151]">
          <FaShieldAlt className="text-5xl text-[#ca1515] mb-4 mx-auto dark:text-white" />
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-700 mb-4 dark:text-[#d1d5db]">
            We provide secure payment options to protect your transactions.
          </p>
          <img
            src="/services-5.png"
            alt="Secure Payment"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center dark:bg-[#374151]">
          <FaBoxOpen className="text-5xl text-[#ca1515] mb-4  mx-auto dark:text-white" />
          <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
          <p className="text-gray-700 mb-4 dark:text-[#d1d5db]">
            Our easy return policy ensures a hassle-free return process for your
            convenience.
          </p>
          <img
            src="/services-6.jpg"
            alt="Easy Returns"
            className="w-full h-48 object-contain rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
