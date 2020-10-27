import React from "react";
import { Layout } from "./components";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Layout />
    </div>
  );
};

export default App;
