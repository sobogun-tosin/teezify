import React from "react";
import styles from "./AppFooter.module.scss";
import {
  IoHeart,
  IoHeartOutline,
  IoVolumeHighOutline,
  IoVolumeLowOutline,
  IoVolumeMediumOutline,
} from "react-icons/io5";
import { HiOutlineQueueList } from "react-icons/hi2";
import Player from "src/sharedComponents/Player/Player";
import { BsVolumeMute } from "react-icons/bs";

const AppFooter: React.FC = () => {
  const initialState = {
    isPlay: false,
    isFavorite: false,
    isShuffle: false,
    isRepeat: false,
    isRepeatOnce: false,
  };
  const [state, setState] = React.useState(initialState);

  const handleStateUpdate = (newState: Partial<typeof initialState>) => {
    setState((state) => ({ ...state, ...newState }));
  };

  const handlePlay = () => {
    handleStateUpdate({ isPlay: !state.isPlay });
  };

  const handleShuffle = () => {
    handleStateUpdate({ isShuffle: !state.isShuffle });
  };

  const handleRepeat = () => {
    handleStateUpdate({ isRepeatOnce: !state.isRepeatOnce });
  };

  const handleFavourite = () => {
    handleStateUpdate({ isFavorite: !state.isFavorite });
  };

  const renderVolumeComponent = (percent: number) => {
    if (percent === 0) return <BsVolumeMute />;
    if (percent < 30) return <IoVolumeLowOutline />;
    if (percent < 90) return <IoVolumeMediumOutline />;
    if (percent >= 90) return <IoVolumeHighOutline />;
  };

  return (
    <section className={styles.AppFooter}>
      <div className={styles.AppFooter_container}>
        <div className={styles.AppFooter_container_artist}>
          <img
            src=""
            alt=""
            className={styles.AppFooter_container_artist_img_sm}
          />
          <div className={styles.AppFooter_container_artist_music}>
            <h4 className={styles.AppFooter_container_artist_music_title}>
              title
            </h4>
            <p className={styles.AppFooter_container_artist_music_artist}>
              artist
            </p>
          </div>
          {state.isFavorite ? (
            <IoHeart onClick={handleFavourite} />
          ) : (
            <IoHeartOutline onClick={handleFavourite} />
          )}
        </div>
        <Player
          {...state}
          handlePlay={handlePlay}
          handleRepeat={handleRepeat}
          handleShuffle={handleShuffle}
          progressPercentage={50}
          progress={3.56}
          progressEnd={4.55}
        />
        <div className={styles.AppFooter_container_controls}>
          <HiOutlineQueueList />
          {renderVolumeComponent(56)}
          <div className={styles.AppFooter_container_controls_progressbar}>
            <div style={{ width: `${40}%` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFooter;
