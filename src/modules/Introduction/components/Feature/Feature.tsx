import React from "react";
import styles from "./Feature.module.scss";
import MusicFeat from "../../assets/images/music-feature.png";

interface FeatureProps {
  id: string;
}

const Feature: React.FC<FeatureProps> = ({ id }) => {
  return (
    <div className={styles.Feature} id={id}>
      <div className={styles.Feature_content}>
        <h3 className={styles.Feature_content_title}>
          Don't miss out on latest music from your favourite artists.
        </h3>
        <button>Log in to continue</button>
      </div>
      <img src={MusicFeat} alt="" />
    </div>
  );
};

export default Feature;
