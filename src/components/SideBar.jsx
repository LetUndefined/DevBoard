import React from "react";
import styles from "./SideBar.module.css";
import ActiveProject from "./ActiveProject";

const SideBar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2 className={styles.sidebarTitle}>DevBoard</h2>
        </div>

        <div className={styles.menuSelectItems}>
          <span>Issues</span>
          <span>Dashboard</span>
        </div>

        <div className={styles.projects}>
          <div className={styles.projectsTitle}>
            <h4>Projects</h4>
          </div>
          <ActiveProject />
        </div>

        <div className={styles.profile}></div>
      </div>
    </>
  );
};

export default SideBar;
