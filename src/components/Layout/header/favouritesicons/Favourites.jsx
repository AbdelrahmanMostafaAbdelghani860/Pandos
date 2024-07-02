import React from "react";
import styles from "../Mainheader.module.css";
import { useNavigate } from "react-router-dom";

function Favourites({ icon: Icon, count }) {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/cart");
  };

  return (
    <div className="relative">
      <button className="hover:text-gray-400">
        <Icon onClick={handleClick} />
      </button>
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </div>
  );
}

export default Favourites;
