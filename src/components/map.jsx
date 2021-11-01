import React from "react";
import * as styles from "./map.module.scss";

export default function Map() {
  return (
    <div className={styles.map} loading="lazy">
      <a
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noopener noreferrer"
      >
        © Openstreetmap.org
      </a>
    </div>
  );
}
