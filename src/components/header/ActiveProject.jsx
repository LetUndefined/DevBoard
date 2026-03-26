import React from "react";
import styles from "./ActiveProject.module.css";

const ActiveProject = () => {
  return (
    <>
      <div className={styles.activeProjects}>
        <span>
          Project 1 <span className={styles.tickets}>0</span>
        </span>
      </div>
    </>
  );
};

export default ActiveProject;
