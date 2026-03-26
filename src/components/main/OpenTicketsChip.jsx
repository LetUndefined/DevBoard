import React from "react";
import styles from "./OpenTicketsChip.module.css";

const OpenTicketsChip = () => {
  return (
    <>
      <div className={styles.chipWrapper}>
        <div className={styles.count}>
          <span>9</span>
          <span>open</span>
        </div>
      </div>
    </>
  );
};

export default OpenTicketsChip;
