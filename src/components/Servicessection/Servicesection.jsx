import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaShuttleVan } from "react-icons/fa";

function Servicesection() {
  return (
    <div className="container flex my-16 p-4 w-full mx-auto justify-center ">
      <div className=" flex items-center space-x-16	">
        <div className="flex space-x-8 ">
          <FaShuttleVan className="text-6xl text-[#ca1515]" />
          <div>
            <h1 className="text-xl font-semibold pb-1">Free Shipping</h1>
            <h3>For all oder over $99</h3>
          </div>
        </div>
        <div className="flex space-x-8 ">
          <FaRegMoneyBillAlt className="text-6xl text-[#ca1515]" />
          <div>
            <h1 className="text-xl font-semibold pb-1">Money Back Guarantee</h1>
            <p>If good have Problems</p>
          </div>
        </div>{" "}
        <div className="flex space-x-8 ">
          <MdOutlineSecurity className="text-6xl text-[#ca1515]" />
          <div>
            {" "}
            <h1 className="text-xl font-semibold pb-1">Online Support 24/7</h1>
            <p>Dedicated support</p>
          </div>
        </div>{" "}
        <div className="flex space-x-8 ">
          <MdOutlineSupportAgent className="text-6xl text-[#ca1515]" />
          <div>
            {" "}
            <h1 className="text-xl font-semibold pb-1">Payment Secure</h1>
            <p>100% secure payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicesection;
