import React from "react";
import Spinner from "../Spinner";

import styles from "./PageLoader.module.scss";

const PageLoader = () => {
  return (
    <div className={styles.PageLoader}>
      <Spinner />
    </div>
  );
};

export default PageLoader;
