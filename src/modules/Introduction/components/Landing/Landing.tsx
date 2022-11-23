import React from "react";
import styles from "./Landing.module.scss";
import Music from "../../assets/images/music2.png";

const Landing = () => {
  return (
    <div className={styles.Landing}>
      <h3 className={styles.Landing_title}>
        Music <i>anywhere</i>, everywhere...
      </h3>
      <img src={Music} alt="" />
    </div>
  );
};

export default Landing;
