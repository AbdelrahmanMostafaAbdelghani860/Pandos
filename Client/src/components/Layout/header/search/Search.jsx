import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hover:text-gray-400 ${isOpen && "text-[#ca1515]"}`}>
        <FaSearch />
      </button>
      <input
        type="text"
        className={`relative right-0    bg-white border rounded shadow transition-all duration-1000 ${
          isOpen ? "opacity-100 w-64  p-2 mx-2" : "opacity-0 w-0"
        }`}
        placeholder="Search..."
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default Search;
