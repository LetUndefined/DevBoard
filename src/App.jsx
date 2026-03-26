import React from "react";
import SideBar from "./components/header/SideBar";
import styles from "./App.module.css";
import MainHeader from "./components/main/MainHeader";

const App = () => {
  return (
    <>
      <div className={styles.flexWrapper}>
        <header className={styles.header}>
          <SideBar />
        </header>
        <main className={styles.main}>
          <MainHeader />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default App;
