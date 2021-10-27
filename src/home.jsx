import React from "react";
import { Helmet } from "react-helmet";
import Daten from "./components/daten";
import FotoInnen from "./images/Innen_1200_web.webp";
import FotoBus from "./images/kitabus_1200_web.webp";
import FotoAussen from "./images/Aussen_1200_web.webp";
import socialMediaImg from "./images/LogoKitaGaensebluemchenSocMed.jpg";
import * as styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Über uns | Kindertagespflege Gänseblümchen</title>
        <meta name="image" content={socialMediaImg} />
        <meta name="twitter:image" content={socialMediaImg} />
        <meta property="og:image" content={socialMediaImg} />
        <meta name="description" content="Wir stellen uns vor." />
      </Helmet>

      <main>
        <h1>Kindertagespflege Gänseblümchen</h1>
        <blockquote className={styles.textintro}>
          "Jedes Kind dabei zu unterstützen zu einer selbständigen und
          gemeinschaftlichen Persönlichkeit heranreifen zu lassen".
        </blockquote>

        <section>
          <div className={styles.foto}>
            <img src={FotoInnen} loading="lazy" alt="Unser Innenbereich" />
          </div>
          <div className={styles.textwrapper}>
            <h2>
              Jedes Kind bringt seine eigenen Begabungen mit, die entdeckt und
              gefördert werden wollen.
            </h2>
            <p>
              So wie die Entwicklung von Selbstbewusstsein, Eigenständigkeit und
              seiner eigenen Persönlichkeit, ist die Basis seiner Entwicklung.
              Mein Ziel ist es, den Kindern es zu ermöglichen ihre individuellen
              Fähigkeiten zu erweitern, zu stärken und auszubauen.
            </p>
          </div>
        </section>

        <section>
          <div className={styles.foto}>
            <img src={FotoBus} loading="lazy" alt="Unser Kitabus" />
          </div>
          <div className={styles.textwrapper}>
            <h2>
              Respekt und würdevoller Umgang miteinander ist mir sehr wichtig
            </h2>
            <p>
              Ich begleite das Kind liebevoll und achtsam und unterstütze es bei
              seiner Entwicklung.
            </p>
          </div>
        </section>

        <section>
          <div className={styles.foto}>
            <img src={FotoAussen} loading="lazy" alt="Unser Außenbereich" />
          </div>
          <div className={styles.textwrapper}>
            <h2>
              Unser freistehendes Haus steht in einer kleinen, ländlichen
              Wohnsiedlung
            </h2>
            <p>
              am Rande von Ladbergen, und ist umgeben von weiteren freistehenden
              Häusern. Die separaten Räumlichkeiten der Kindertagespflege
              befinden sich in Erdgeschoss und bestehen aus zwei verbundenen
              Räumen mit einem großzügigem Essbereich, dazu gehört auch ein
              kleines Badezimmer, wo wir uns nach den Malzeiten waschen und
              zähne putzen.
            </p>
          </div>
        </section>
      </main>

      <Daten />
    </>
  );
}
