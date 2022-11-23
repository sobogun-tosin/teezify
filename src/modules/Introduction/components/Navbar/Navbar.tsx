import React from "react";
import { Link } from "react-router-dom";
import { BrandLogo } from "src/assets";
import { introductionPageRoute } from "src/config";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };
  return (
    <div className={styles.Navbar}>
      <nav className={styles.Navbar_nav}>
        <Link to={introductionPageRoute}>
          <BrandLogo />
        </Link>
        <div className={styles.Navbar_nav_links}>
          <a
            href="#feature"
            className={styles.Navbar_nav_links_item}
            onClick={handleClick}
          >
            Feature
          </a>
          <div className={styles.Navbar_nav_links_vbar} />
          <Link to="" className={styles.Navbar_nav_links_item}>
            Sign up
          </Link>
          <Link to="" className={styles.Navbar_nav_links_item}>
            Log in
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
