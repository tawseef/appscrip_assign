import React from "react";
import styles from "./productCard.module.css";
import Image from "next/image";

function ProductCard() {
  const imgSRC = [
    "/Teddy.svg",
    "/Cap.svg",
    "/Belt.svg",
    "/Bag2.svg",
    "/Bag3.svg",
    "/Bag4.svg",
    "/Teddy2.svg",
    "/Bag5.svg",
    "/Bag6.svg",
    "/Bag7.svg",
    "/Teddy.svg",
    "/Bag.svg",
  ];

  const imgName = [
    "PPXOC Milkyway",
    "PPXOC Milkyway",
    "ProductName",
    "ProductName",
    "ProductName",
    "ProductName",
    "ProductName",
    "ProductName",
    "ProductName",
    "ProductName",
    "ProductName",
    "ProductName",
  ];

  return (
    <div className={styles.cardContainer}>
      {imgName.map((item, ind) => (
        <div key={ind} className={styles.cardWrapper}>
          <div>
            <Image src={imgSRC[ind]} alt="Not Found" height={399} width={300} />
          </div>
          <div className={styles.nameDiv}>
            <div className={styles.productName}>{item}</div>
            <div className={styles.accountText}>
              <div>Sign in or Create an account to see pricing</div>
              <div>
                {ind === 2 ? (
                  <Image
                    src="/wishlistRed.svg"
                    alt="Not Found"
                    height={24}
                    width={24}
                  />
                ) : (
                  <Image
                    src="/wishlist.svg"
                    alt="Not Found"
                    height={24}
                    width={24}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
