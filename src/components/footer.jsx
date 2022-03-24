import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer>
        <ul className={styles.footerListItems}>
          <li>
            <Link to="/impressum" className={styles.footerLink}>
              Impressum
            </Link>
          </li>
          <li>
            <Link to="/datenschutz" className={styles.footerLink}>
              Datenschutz
            </Link>
          </li>
          <li>
            <a
              href="https://sascha-nabrotzky.github.io"
              className={styles.footerLink}
              target="_blank"
              rel="noreferrer"
              title="Zur Website von Frontend-Entwickler | Sascha Nabrotzky"
            >
              Frontend-Entwicklung | Sascha Nabrotzky
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
