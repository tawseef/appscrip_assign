import React from 'react';
import style from "./tagline.module.css";

function Tagline() {
  return (
    <>
    <div className={style.tagHeading}>
        <div className={style.tagTitle}>DISCOVER OUR PRODUCTS</div>
        <div className={style.tagText}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</div>
    </div>
        <hr style={{marginTop: "70px", color:"#E5E5E5"}}/>
    </>
  )
}

export default Tagline