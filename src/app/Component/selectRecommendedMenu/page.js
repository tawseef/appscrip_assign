import React from "react";
import styles from "./recommended.module.css";

function RecommendMenu() {
  return (
    <div className={styles.recommendDiv}>
      <div className={styles.recommItem}>
        {" "}
        <input type="checkbox" /> RECOMMENDED{" "}
      </div>
      <div className={styles.recommItem}>
        {" "}
        <input type="checkbox" /> NEWEST FIRST{" "}
      </div>
      <div className={styles.recommItem}>
        {" "}
        <input type="checkbox" /> POPULAR{" "}
      </div>
      <div className={styles.recommItem}>
        {" "}
        <input type="checkbox" /> PRICE: HIGH TO LOW{" "}
      </div>
      <div className={styles.recommItem}>
        {" "}
        <input type="checkbox" /> PRICE: LOW TO HIGH{" "}
      </div>
    </div>
  );
}

export default RecommendMenu;
