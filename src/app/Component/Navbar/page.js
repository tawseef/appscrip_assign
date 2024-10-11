import React from "react";
import Image from "next/image";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <div>
      <div className={style.navbarWrapper}>
        <div className={style.navLogo}>
          <Image
            src={"/LogoImage.png"}
            alt="Example Image"
            width={35.61}
            height={35.66}
          />
        </div>
        <div className={style.brandName}>LOGO</div>
        <div className={style.navImageSection}>
          <Image
            src={"/search.svg"}
            alt="Example Image"
            width={24}
            height={24}
          />
          <Image
            src={"/heart.svg"}
            alt="Example Image"
            width={24}
            height={24}
          />
          <Image
            src={"/shoppingbag.svg"}
            alt="Example Image"
            width={24}
            height={24}
          />
          <Image
            src={"/profile.svg"}
            alt="Example Image"
            width={24}
            height={24}
          />
          <Image
            src={"/language.png"}
            alt="Example Image"
            width={52}
            height={16}
          />
        </div>
      </div>
      <div className={style.navMenuContainer}>
      <div className={style.navMenu}>
        <div>SHOP</div>
        <div>SKILLS</div>
        <div>STORIES</div>
        <div>ABOUT</div>
        <div>CONTACT US</div>
      </div>
      </div>
      <hr style={{color:  "#E5E5E5", marginTop:"32px", height:"1px"}}/>
    </div>
  );
}

export default Navbar;
