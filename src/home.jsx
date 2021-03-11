import React from 'react';
import FotoInnen from './images/Innen_1200_web.jpg';
import FotoBus from './images/kitabus_1200_web.jpg';
import FotoAussen from './images/Aussen_1200_web.jpg';

function Home() {

    return (
  
      <main>
        <section className="textintro">
          <h1>
            <blockquote>"Jedes Kind dabei zu unterstützen zu einer selbständigen und gemeinschaftlichen Persönlichkeit heranreifen zu lassen".</blockquote>
          </h1>
        </section>

        <section>
          <img className="foto" src={FotoInnen} alt="Unser Innenbereich"/>
          <div className="textwrapper">
            <h2>
            Jedes Kind bringt seine eigenen Begabungen mit, die entdeckt und gefördert werden wollen.
            </h2>
            <p>So wie die Entwicklung von Selbstbewusstsein, Eigenständigkeit und seiner eigenen Persönlichkeit, ist die Basis seiner Entwicklung. Mein Ziel ist es, den Kindern es zu ermöglichen ihre individuellen Fähigkeiten zu erweitern, zu stärken und auszubauen.
              </p>
          </div>
        </section>

        <section>
          <img className="foto" src={FotoBus} alt="Unser Kitabus"/>
          <div className="textwrapper">
          <h2>Respekt und würdevoller Umgang miteinander ist mir sehr wichtig</h2>
            <p>Ich begleite das Kind liebevoll und achtsam und unterstütze es bei seiner Entwicklung.</p>
            </div>
        </section>

        <section>
          <img className="foto" src={FotoAussen} alt="Unser Außenbereich"/>
          <div className="textwrapper">
          <h2>Unser freistehendes Haus steht in einer kleinen, ländlichen Wohnsiedlung</h2>
          <p>am Rande von Ladbergen, und ist umgeben von weiteren freistehenden Häusern. Die separaten Räumlichkeiten der Kindertagespflege befinden sich in Erdgeschoss und bestehen aus zwei verbundenen Räumen mit einem großzügigem Essbereich, dazu gehört auch ein kleines Badezimmer, wo wir uns nach den Malzeiten waschen und zähne putzen.</p>
          </div>
        </section>

        <aside>
          <h2>Daten:</h2>
          <p><strong>Altersangebot:</strong> Ich biete Betreuung für Kinder aus Ladbergen und Umgebung von <strong>0-3 Jahren</strong> an. Die Tagesgruppe besteht in der Regel aus 5 Kindern, Jungs und Mädchen je nach Buchungsstunden. Nach individueller Absprache kann ich mir auch Randzeiten Betreuung vorstellen.</p>
          <p><strong>Integrative Betreuungsangebote:</strong> Nein</p>
          <p><strong>Barrierefreier Zugang: </strong>Nein</p>
        </aside>

      </main>
     
    );
  }
  
  export default Home;