import React from "react";
import AppFooter from "../AppFooter";
import AppSidebar from "../AppSidebar";
import styles from "./AppWrapper.module.scss";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <main className={styles.AppWrapper}>
      <section className={styles.AppWrapper_container}>
        <AppSidebar />
        <main className={styles.AppWrapper_container_content}>{children}</main>
      </section>
      <AppFooter />
    </main>
  );
};

export default AppWrapper;
