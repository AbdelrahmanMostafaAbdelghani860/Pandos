import React, { useEffect, useState } from "react";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const savedCartProducts = localStorage.getItem("cartproduct");
    if (savedCartProducts) {
      setCartProducts(JSON.parse(savedCartProducts));
    }
  }, []);

  return (
    <div className="container mx-auto mt-16">
      <h2 className="text-2xl font-semibold text-center mb-6">Your Cart</h2>
      {cartProducts.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartProducts.map((product, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-500 mb-2">{product.description}</p>
              <p className="text-lg font-semibold mb-2">€{product.price}</p>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  const updatedCartProducts = cartProducts.filter(
                    (_, i) => i !== index
                  );
                  setCartProducts(updatedCartProducts);
                  localStorage.setItem(
                    "cartproduct",
                    JSON.stringify(updatedCartProducts)
                  );
                }}>
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;