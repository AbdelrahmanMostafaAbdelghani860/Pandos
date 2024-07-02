import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Productslist from "./components/Products/Productslist";
import { useState } from "react";
import { PiLampPendantFill } from "react-icons/pi";
import { CartProvider } from "./Context/Cart.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <CartProvider>
      <div className={`${darkMode && "dark"} dark:bg-[#1f2937] `}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="user" element={<User />} />
              <Route path="cart" element={<Cart />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="product" element={<Productslist />} />
            </Route>
          </Routes>
        </Router>
        <PiLampPendantFill
          onClick={toggleDarkMode}
          className="fixed w-16 h-16 top-16 right-4 bg-white w-[50px] 
        dark:text-white bg-opacity-0	 cursor-pointer text-yellow-400">
          {darkMode ? "Light" : "Dark"}
        </PiLampPendantFill>
      </div>
    </CartProvider>
  );
}

export default App;
