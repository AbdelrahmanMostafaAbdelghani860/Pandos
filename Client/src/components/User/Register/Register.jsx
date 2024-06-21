import React from "react";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto my-32">
      <h2 className="text-2xl font-semibold text-[#ca1515] mb-6 text-center">
        Register
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515]"
            id="username"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address">
            Address
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515]"
            id="address"
            type="text"
            placeholder="Your Address"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515]"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515]"
            id="password"
            type="password"
            placeholder="Your Password"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-[#ca1515] hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Register
          </button>{" "}
          {/* <p>already have an account</p> */}
        </div>
      </form>
    </div>
  );
}

export default Register;
