import React, { useContext } from "react";
import CartContext from "../../Context/Cart";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="container mx-auto pt-20 dark:bg-[#111827]">
      <h2 className="text-4xl font-semibold text-center mb-6 mt-32">
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center pt-20 pb-64">
          <h2 className="text-center text-3xl mb-10 font-semibold">
            Your cart is empty.
          </h2>
          <img src="/cart.jpg" className="mx-auto h-[300px]" alt="Empty Cart" />
        </div>
      ) : (
        <>
          <div className="overflow-x-auto pt-20 pb-64">
            <table className="min-w-full bg-white dark:bg-[#1f2937]">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-left leading-4 text-gray-600 dark:text-gray-200 tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-left leading-4 text-gray-600 dark:text-gray-200 tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-left leading-4 text-gray-600 dark:text-gray-200 tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-left leading-4 text-gray-600 dark:text-gray-200 tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-left leading-4 text-gray-600 dark:text-gray-200 tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-left leading-4 text-gray-600 dark:text-gray-200 tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-600">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-24 h-24 object-contain"
                      />
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-600">
                      <h3 className="text-xl font-semibold">{product.title}</h3>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-600">
                      <p className="text-gray-500 dark:text-gray-400">
                        {product.description}
                      </p>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-600">
                      <p className="text-lg font-semibold">€{product.price}</p>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-600">
                      <div className="flex items-center">
                        <button
                          className={` ${
                            product.quantity === 1 ? "bg-red-500" : ""
                          }bg-red-500 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline`}
                          onClick={() => decreaseQuantity(product)}
                          disabled={product.quantity === 1}>
                          -
                        </button>
                        <span className="mx-2">{product.quantity}</span>
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                          onClick={() => increaseQuantity(product)}>
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-600">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => removeFromCart(product)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right ">
              <h3 className="text-2xl font-semibold p-10 text-[#ca1515]  dark:text-[#d1d5db]">
                Total <br /> <br /> € {totalPrice.toFixed(2)}
              </h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
