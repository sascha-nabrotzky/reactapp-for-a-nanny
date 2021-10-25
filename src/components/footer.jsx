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
        </ul>
      </footer>
    </>
  );
}
