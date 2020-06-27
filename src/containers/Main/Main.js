import React from "react";
import styles from "./Main.module.scss";
import Dashboard from "./Dashboard";

const Main = () => {
  return (
    <main className={styles["main"]}>
      <Dashboard />
    </main>
  );
};

export default Main;
