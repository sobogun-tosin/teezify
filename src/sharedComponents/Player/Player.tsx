import React from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { IoShuffle } from "react-icons/io5";
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import { TbRepeatOnce, TbRepeat } from "react-icons/tb";
import cx from "classnames";

import styles from "./Player.module.scss";

interface PlayerProps {
  handleShuffle: VoidFunction;
  handlePlay: VoidFunction;
  handleRepeat: VoidFunction;
  isShuffle: boolean;
  isPlay: boolean;
  isRepeat: boolean;
  isRepeatOnce: boolean;
  progressPercentage: number;
  progress: number;
  progressEnd: number;
}

const Player: React.FC<PlayerProps> = ({
  isPlay,
  isShuffle,
  isRepeat,
  isRepeatOnce,
  progressPercentage,
  progress,
  progressEnd,
  handlePlay,
  handleRepeat,
  handleShuffle,
}) => {
  return (
    <div className={styles.Player}>
      <div className={styles.Player_controls}>
        <IoShuffle
          className={cx(styles.Player_controls_svg, {
            [styles.Player_controls_svg_active]: isShuffle,
          })}
          onClick={handleShuffle}
        />
        <BiSkipPrevious
          className={cx(
            styles.Player_controls_svg,
            styles.Player_controls_svg_md
          )}
        />
        {isPlay ? (
          <RiPlayCircleFill
            onClick={handlePlay}
            className={styles.Player_controls_svg_lg}
          />
        ) : (
          <RiPauseCircleFill
            onClick={handlePlay}
            className={styles.Player_controls_svg_lg}
          />
        )}
        <BiSkipNext
          className={cx(
            styles.Player_controls_svg,
            styles.Player_controls_svg_md
          )}
        />
        {isRepeatOnce ? (
          <TbRepeatOnce
            className={cx(
              styles.Player_controls_svg,
              styles.Player_controls_svg_active
            )}
            onClick={handleRepeat}
          />
        ) : (
          <TbRepeat
            className={cx(styles.Player_controls_svg, {
              [styles.Player_controls_svg_active]: isRepeat,
            })}
            onClick={handleRepeat}
          />
        )}
      </div>
      <div className={styles.Player_container}>
        <p className={styles.Player_container_count}>{progress}</p>
        <div className={styles.Player_container_progressbar}>
          <div style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p className={styles.Player_container_count}>{progressEnd}</p>
      </div>
    </div>
  );
};

export default Player;
