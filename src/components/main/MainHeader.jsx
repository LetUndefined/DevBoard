import React from "react";
import styles from "./MainHeader.module.css";
import OpenTicketsChip from "./OpenTicketsChip";

const MainHeader = () => {
  return (
    <>
      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderLeft}>
          <div className={styles.mainHeaderTitle}>
            <h2>DevBoard</h2>
          </div>
          <div className={styles.openTicketsChip}>
            <OpenTicketsChip />
          </div>
        </div>
        <div className={styles.mainHeaderRight}>
          <div className={styles.searchField}>
            <input type="text" placeholder="Search issues" />
          </div>
          <div className={styles.addIssueBtn}>
            <button>+ New issue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
