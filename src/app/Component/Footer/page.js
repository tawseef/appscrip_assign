import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className={styles.footerConteiner}>
        <div>
          <div className={`${styles.contactDiv}`}>
            <div className={styles.divOne}>
              <div className={styles.Font700}>BE THE FIRST TO KNOW</div>
              <div className={`${styles.Font400} ${styles.mt48}`}>
                Sign up for updates from mettā muse.
              </div>
              <div className={`${styles.mt70} ${styles.inpDiv}`}>
                <input
                  className={`${styles.inputBox} ${styles.Font400}`}
                  type="text"
                  placeholder="Enter your email..."
                />
                <button className={styles.btn}>SUBSCRIBE</button>
              </div>
            </div>

            <div>
              <div className={styles.Font700}>CONTACT US</div>
              <div className={styles.mt16}>
                <div className={styles.Font400}>+44 221 133 5360</div>
                <div className={`${styles.Font400} ${styles.mt16}`}>
                  customercare@mettamuse.com
                </div>
              </div>
              <div className={`${styles.Font700} ${styles.mt24}`}>Currency</div>
              <div className={styles.mt16}>
                <Image
                  src={"/USA.svg"}
                  alt="Not Found"
                  height={24}
                  width={72}
                />
              </div>
              <div
                className={`${styles.Font400} ${styles.wt} ${styles.mt16} ${styles.Font12}`}
              >
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </div>
            </div>
          </div>
          <hr style={{ marginTop: "72px" }} />
          <div className={styles.divTwo}>
            <div>
              <div className={styles.Font700}>mettā muse</div>
              <div className={`${styles.mt16} ${styles.about}`}>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  About Us
                </div>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  Stories
                </div>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  Artisans
                </div>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  Boutiques
                </div>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  Contact Us
                </div>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  EU Compliances Docs
                </div>
              </div>
            </div>

            <div>
              <div className={styles.Font700}>QUICK LINKS</div>
              <div className={`${styles.mt16} ${styles.about}`}>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  Orders & Shipping
                </div>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  Join/Login as a Seller
                </div>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  Paymnet & Pricing
                </div>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  Return & Refunds
                </div>
                <div className={`${styles.Font400} ${styles.Font18}`}>FAQs</div>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  Privacy Policy
                </div>
                <div className={`${styles.Font400} ${styles.Font18}`}>
                  Terms & Conditions
                </div>
              </div>
            </div>

            <div>
              <div className={styles.Font700}>FOLLOW US</div>
              <div className={styles.mt24}>
                <Image
                  src={"/Instagram.svg"}
                  alt="Not Found"
                  height={32}
                  width={76}
                />
              </div>
              <div className={`${styles.Font700} ${styles.mt56}`}>
                mettā muse Accepts
              </div>
              <div className={styles.mt16}>
                <Image
                  src={"/paymentCard.svg"}
                  alt="Not Found"
                  height={35}
                  width={376}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={` ${styles.Font400} ${styles.reserveLine}`}>
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
