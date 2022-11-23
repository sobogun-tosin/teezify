import React from "react";
import { Link } from "react-router-dom";
import { BrandLogoLarge } from "src/assets";
import { introductionPageRoute } from "src/config";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer_content}>
        <Link to={introductionPageRoute}>
          <BrandLogoLarge />
        </Link>
        <div className={styles.Footer_content_body}>
          <p>Create an account with Teezify today</p>
          <button>Sign up</button>
        </div>
      </div>
      <p className={styles.Footer_rights}>
        © {new Date().getFullYear()} <i>Teezify</i> by Sobogun Tosin
      </p>
    </div>
  );
};

export default Footer;
