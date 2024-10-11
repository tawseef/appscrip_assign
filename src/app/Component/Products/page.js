import React from "react";
import styles from "./products.module.css";
import Image from "next/image";
import ProductCard from "../ProductCard/page";

function Products() {
  return (
    <div>
      <div className={styles.filterWrapper}>
        <div>
          <div className={`${styles.filter_item} ${styles.flex_btwn}`}>
            <div className={styles.itemCount}>3425 ITEMS</div>
            <div className={styles.hide}>
              <Image
                src={"/arrowleft.svg"}
                alt="Example Image"
                width={16}
                height={16}
              />
              HIDE FILTER
            </div>
          </div>
        </div>
        <div className={styles.recommend}>
          RECOMMENDED
          <Image
            src={"/arrowdown.svg"}
            alt="Example Image"
            width={16}
            height={16}
          />
        </div>
      </div>
      <hr style={{ marginTop: "25px" }} />
      <div className={styles.filterWrapper}>
        <div className={styles.customizeColumn}>
          <div className={styles.Custom}>
            <input type="checkbox" /> CUSTOMIZBLE
            <hr style={{ width: "300px", marginTop: "16px" }} />
          </div>
          {[
            "IDEAL FOR",
            "OCCASION",
            "WORK",
            "FABRIC",
            "SEGMENT",
            "SUITABLE FOR",
            "RAW MATERIALS",
            "PATTERN",
          ].map((item, ind) => {
            return (
              <div key={ind} className={`${styles.Custom} ${styles.pt25}`}>
                <div className={styles.flex_btwn}>
                  <div>{item}</div>
                  <div>
                    <Image
                      src={"/arrowdown.svg"}
                      alt="Example Image"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                <div className={styles.subMenu}> All </div>
                <hr style={{ width: "300px", marginTop: "25px" }} />
              </div>
            );
          })}
        </div>
      <div className={styles.productItem}>
        <ProductCard />
      </div>
      </div>
    </div>
  );
}

export default Products;
