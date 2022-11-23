import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import cx from "classnames";
import styles from "./AppSidebar.module.scss";

interface AppSidebarItemProps {
  title: string;
  icon?: React.ReactNode;
  url?: string;
  addPlaylist?: boolean;
  index?: number;
}

const AppSidebarItem: React.FC<AppSidebarItemProps> = ({
  icon,
  title,
  addPlaylist,
  url,
  index,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddPlaylist = () => {};
  const handleSelectPlaylist = () => {
    navigate({ pathname: url });
  };
  return (
    <div
      className={cx(styles.AppSidebar_item, {
        [styles.AppSidebar_item_active]: url === location.pathname,
      })}
      onClick={addPlaylist ? handleAddPlaylist : handleSelectPlaylist}
    >
      {icon ? (
        <h4 className={styles.AppSidebar_item_text}>
          {icon} {title}
        </h4>
      ) : (
        <span>
          {title} #{index}
        </span>
      )}
    </div>
  );
};

export default AppSidebarItem;
