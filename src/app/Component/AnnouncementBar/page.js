import React from "react";
import styles from "./announcement.module.css";
import Image from "next/image";

function AnnouncementBar() {
  return (
    <div className={styles.announcementWrapper}>
      <Image src={"/lorem.svg"} alt="Example Image" width={138} height={16} />
      <Image src={"/lorem.svg"} alt="Example Image" width={138} height={16} />
      <Image src={"/lorem.svg"} alt="Example Image" width={138} height={16} />
    </div>
  );
}

export default AnnouncementBar;
