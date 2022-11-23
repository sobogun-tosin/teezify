import React from "react";
import { SIDEBAR_DATA } from "../../data";
import styles from "./AppSidebar.module.scss";
import AppSidebarItem from "./AppSidebarItem";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiHeartSquare } from "react-icons/bi";
import { resizeNavbar } from "src/utils";

const AppSidebar: React.FC = () => {
  const navRef = React.useRef<any>(null);

  React.useEffect(() => {
    resizeNavbar(navRef);
  }, [navRef]);

  return (
    <nav className={styles.AppSidebar}>
      <div className={styles.AppSidebar_container} ref={navRef}>
        {SIDEBAR_DATA.map(({ title, icon, url }, index) => (
          <AppSidebarItem title={title} icon={icon} url={url} key={index} />
        ))}
        <div className={styles.AppSidebar_bottom}>
          <AppSidebarItem
            title="Create Playlist"
            addPlaylist
            icon={<BsFillPlusSquareFill />}
          />
          <AppSidebarItem title="Liked Songs" icon={<BiHeartSquare />} />
        </div>
        <div className={styles.AppSidebar_hline} />
        <div className={styles.AppSidebar_playlist}>
          {["playlist", "my music"].map((item, index) => (
            <AppSidebarItem title={item} index={index + 1} key={index} />
          ))}
        </div>
        <div className={styles.AppSidebar_vline} />
      </div>
    </nav>
  );
};

export default AppSidebar;
