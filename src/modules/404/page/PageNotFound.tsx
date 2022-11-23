import React from "react";
import { Link } from "react-router-dom";
import { BrandLogo } from "src/assets";
import { homePageRoute } from "src/config";
import styles from "./PageNotFound.module.scss";
import Robot from "../assets/images/robot.png";

const PageNotFound = () => {
  return (
    <div className={styles.PageNotFound}>
      <header className={styles.PageNotFound_nav}>
        <Link to={homePageRoute}>
          <BrandLogo />
        </Link>
      </header>
      <section className={styles.PageNotFound_body}>
        <div className={styles.PageNotFound_body_content}>
          <h3 className={styles.PageNotFound_body_content_text}>
            Oops!, The page you are looking for does not exist.
          </h3>
        </div>
        <img
          src={Robot}
          alt="page not found"
          className={styles.PageNotFound_body_content_img}
        />
      </section>
    </div>
  );
};

export default PageNotFound;
