import React, { useContext, useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { useSearchParams } from "react-router-dom";
import CartContext from "../../Context/Cart";
import { FaShoppingCart } from "react-icons/fa";
function Productslist() {
  const [products, setProducts] = useState([]);
  const [searchterm, setSearchterm] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCartRed, setCartRed] = useState(false);
  const getProducts = async () => {
    setLoading(true);
    const data = await fetch("https://ecommerce.routemisr.com/api/v1/products");
    const response = await data.json();
    setProducts(response.data);
    setLoading(false);
  };

  const { addToCart, removeFromCart } = useContext(CartContext);

  // const handleOnClickProduct

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    const term = searchParams.get("search") || "";
    setSearchterm(term);
  }, [searchParams]);

  const handleSearchChange = (e) => {
    setSearchterm(e.target.value);
    setSearchParams({ search: e.target.value });
  };
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchterm.toLowerCase())
  );

  return (
    <div className="container mx-auto mb-16 mt-32 ">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products </h1>
      <input
        type="text"
        placeholder="Search products..."
        className={`mb-8 border-0 border-b-2 border-[#ca1515] focus:outline-none`}
        onChange={handleSearchChange}
        value={searchterm}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 transform transition-transform translate-y-6 duration-1000">
        {loading ? (
          <div className="text-center  col-span-full mb-[550px] mx-auto">
            <Loading />
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="relative bg-white shadow-md rounded-lg overflow-hidden  text-center flex flex-col justify-between h-full">
              <img
                src={product.imageCover}
                alt={product.title}
                className="w-full"
              />
              <p className="p-3 font-semibold text-[#ca1515]">
                {product.title}
              </p>
              <p className="text-gray-500">
                {product.description.length > 250
                  ? `${product.description.substring(0, 250)} ...`
                  : product.description}
              </p>
              <p className="p-3 b-0 text-semibold text-xl">
                €{product.price / 50}
              </p>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <FaShoppingCart
                    className={` ${
                      isCartRed ? "text-red-500 " : "text-white"
                    } text-2xl transform translate-y-12  transition-transform duration-300 cursor-pointer`}
                    onClick={() => {
                      if (!isCartRed) {
                        setCartRed(true);
                        addToCart({
                          id: product._id,
                          title: product.title,
                          price: product.price / 50,
                          image: product.imageCover,
                          description: product.description,
                        });
                      } else {
                        setCartRed(false);
                        removeFromCart({ id: product._id });
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Productslist;
