import React from "react";
import { Feature, Footer, Landing, Navbar } from "../components";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Navbar />
      <div className={styles.Home_content}>
        <Landing />
        <Feature id="feature" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
