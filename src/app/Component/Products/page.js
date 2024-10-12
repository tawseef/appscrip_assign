"use client";
import React, { useState } from "react";
import styles from "./products.module.css";
import Image from "next/image";
import ProductCard from "../ProductCard/page";
import RecommendMenu from "../selectRecommendedMenu/page";

function Products() {
  const [showColumn, setShowColumn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [recommendMenu, setRecommendMenu] = useState(false);

  return (
    <div>
      <div className={styles.filterWrapper}>
        <div>
          <div className={`${styles.filter_item} ${styles.flex_btwn}`}>
            <div className={styles.itemCount}>3425 ITEMS</div>
            <div className={styles.hide}>
              <Image
                onClick={() => setShowColumn(!showColumn)}
                src={"/arrowleft.svg"}
                alt="Example Image"
                width={16}
                height={16}
              />
              {!showColumn ? <>SHOW FILTER</> : <>HIDE FILTER</>}
            </div>
          </div>
        </div>
        <div className={styles.recommend}>
          RECOMMENDED
          <Image
            onClick={() => setRecommendMenu(!recommendMenu)}
            src={"/arrowdown.svg"}
            alt="Not Found"
            width={16}
            height={16}
          />
          {recommendMenu && (
            <div className={styles.recommendList}>
              <RecommendMenu />
            </div>
          )}
        </div>
      </div>
      <hr style={{ marginTop: "25px" }} />
      <div className={styles.filterWrapper}>
        {showColumn ? (
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
                      {ind == 0 ? (
                        <>
                          <Image
                            onClick={() => setShowMenu(!showMenu)}
                            src={"/arrowdown.svg"}
                            alt="Example Image"
                            width={16}
                            height={16}
                          />
                        </>
                      ) : (
                        <Image
                          src={"/arrowdown.svg"}
                          alt="Example Image"
                          width={16}
                          height={16}
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.subMenu}> All </div>
                  {ind == 0 && !showMenu && (
                    <div>
                      <div className={styles.unSelect}> Unselect All</div>
                      <div className={`${styles.unSelect} ${styles.checkItem}`}>
                        <input type="checkbox" /> Men
                      </div>
                      <div className={`${styles.unSelect} ${styles.checkItem}`}>
                        <input type="checkbox" /> Women
                      </div>
                      <div className={`${styles.unSelect} ${styles.checkItem}`}>
                        <input type="checkbox" /> Baby & Kids
                      </div>
                    </div>
                  )}
                  <hr style={{ width: "300px", marginTop: "25px" }} />
                </div>
              );
            })}
          </div>
        ) : (
          false
        )}
        <div className={styles.productItem}>
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Products;
