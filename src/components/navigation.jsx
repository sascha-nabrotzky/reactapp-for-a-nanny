import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/LogoKitaGaensebluemchen.svg";
<<<<<<< HEAD
import * as styles from "./navigation.module.scss";
=======
import styles from "./navigation.module.scss";
>>>>>>> 853806861ba467d606a538376bf0cd347b2d8cbb

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
