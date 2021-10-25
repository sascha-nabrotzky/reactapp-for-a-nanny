import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./navigation.module.scss";

export default function Navigation() {
  return (
    <nav>
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
