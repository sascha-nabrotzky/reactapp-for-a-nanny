import React from "react";
import Logo from "../images/LogoKitaGaensebluemchen.svg";
import ProfileImg from "../images/Oksana_Welk.webp";
import IGLogo from "../images/IGLogo_neg.svg";
import StepLogo from "../images/StepLogo.svg";
import EmailSymbol from "../images/email_sym.svg";
<<<<<<< HEAD
import * as styles from "./header.module.scss";
=======
import styles from "./header.module.scss";
>>>>>>> 853806861ba467d606a538376bf0cd347b2d8cbb

export default function Header() {
  return (
    <header>
      <section className={styles.textImgWrapper}>
        <div className={styles.imgWrapper}>
          <div className={styles.logoImg}>
            <img src={Logo} alt="Logo Kita Gänseblümchen" />
          </div>
          <div className={styles.profileImg}>
            <img src={ProfileImg} alt="Profil Foto Oksana Welk" />
          </div>
        </div>
        <div className={styles.profileLinks}>
          <a
            href="https://www.instagram.com/oksanawelk/?hl=de"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className={styles.socialImg}
              src={IGLogo}
              alt="Logo Instagram"
            />
          </a>
          <a
            href="https://step.kreis-steinfurt.de/de/einrichtungen/liste/1055/details?amt=Ladbergen&p=2"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className={styles.socialImg}
              src={StepLogo}
              alt="Logo Step Steinfurt"
            />
          </a>
          <a
            href="mailto:kontakt@gaensebluemchen-ladbergen.de"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className={styles.socialImg}
              src={EmailSymbol}
              alt="E-Mail-Symbol"
            />
          </a>
        </div>
      </section>
    </header>
  );
}
