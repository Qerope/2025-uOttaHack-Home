import React from "react";

import styles from "../styles/MainFooter.module.css";

interface MainFooterProps {}

const MainFooter: React.FC<MainFooterProps> = () => {
  return (
    <section className={`${styles.container} bg-[#1F4172]`}>
      <div className="flex w-full h-48"></div>
    </section>
  );
};

export default MainFooter;
