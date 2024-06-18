import React from "react";
import styles from "../Mainheader.module.css";

function Favourites({ icon: Icon, count }) {
  return (
    <div className="relative">
      <button className="hover:text-gray-400">
        <Icon />
      </button>
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </div>
  );
}

export default Favourites;
