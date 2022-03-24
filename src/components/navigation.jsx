import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/LogoKitaGaensebluemchen.svg";
import * as styles from "./navigation.module.scss";

export default function Navigation() {
  const [currentClass, setClass] = useState(`${styles.logoHidden}`);

  window.addEventListener("scroll", () => {
    setClass(
      window.scrollY > 200 ? `${styles.logoVisible}` : `${styles.logoHidden}`
    );
  });

  return (
    <nav>
      <div className={currentClass}>
        <img src={Logo} alt="Logo Kita Gänseblümchen" />
      </div>
      <ul className={styles.navListItems}>
        <li className={styles.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about">Über</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/tagesablauf">Tagesablauf</Link>
        </li>
      </ul>
    </nav>
  );
}
