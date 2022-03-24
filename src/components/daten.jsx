import React from "react";
import styles from "./daten.module.scss";

export default function Daten() {
  return (
    <aside>
      <div className={styles.dataWrapper}>
        <h2>Eckdaten der "Gänseblümchen":</h2>
        <p>
          <strong>Altersangebot:</strong> Ich biete Betreuung für Kinder aus
          Ladbergen und Umgebung von <strong>0-3 Jahren</strong> an. Die
          Tagesgruppe besteht in der Regel aus <strong>5 Kindern,</strong> Jungs
          und Mädchen je nach Buchungsstunden. Nach individueller Absprache kann
          ich mir auch
          <strong> Randzeiten-Betreuung</strong> vorstellen.
        </p>
        <p>
          <strong>Integrative Betreuungsangebote:</strong> Nein
        </p>
        <p>
          <strong>Barrierefreier Zugang: </strong>Nein
        </p>
        <address>
          <p className={styles.addressText}>
            <strong>Koldefeld 5</strong> &middot; 49549 Ladbergen
          </p>
        </address>
        <a
          href="https://kitala-ladbergen.de"
          className={styles.addressText}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Mitglied im{" "}
            <strong>KiTaLa e.V. – Kindertagespflege Ladbergen</strong>
          </p>
        </a>
      </div>
    </aside>
  );
}
