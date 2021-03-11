import './header.scss';
import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/LogoKitaGaensebluemchen.svg';
import ProfileImg from '../images/Oksana_Welk.jpg';
import IGLogo from '../images/IGLogo_neg.svg';
import StepLogo from '../images/StepLogo.svg';
import EmailSymbol from '../images/email_sym.svg';

function Header() {

    return (
  
      <header>
          <nav>
            <ul className="navListItems">
                <li className="navItem">
                    <Link to="/">Home</Link>
                </li>
                <li className="navItem">
                    <Link to="/about">Über</Link>
                </li>
                <li className="navItem">
                    <Link to="/tagesablauf">Tagesablauf</Link>
                </li>
                <li className="navItem">
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
          </nav>

            <section className="headerImages">
                <div>
                    <img className="logoImg" src={Logo} alt="" />
                </div>
                <div>
                    <img className="profileImg" src={ProfileImg} alt="" />
                </div>
            </section>

            <section className="profileLinks">
                <a href="https://www.instagram.com/oksanawelk/?hl=de" target="_blank" rel="noreferrer noopener">
                    <img className="socialImg" src={IGLogo} alt="Logo Instagram"/>
                </a>
                <a href="https://step.kreis-steinfurt.de/de/einrichtungen/liste/1055/details?amt=Ladbergen&p=2" target="_blank" rel="noreferrer noopener"><img className="socialImg" src={StepLogo} alt="Logo Step Steinfurt"/></a>
                <a href="mailto:kontakt@gaensebluemchen-ladbergen.de" target="_blank" rel="noreferrer noopener"><img className="socialImg" src={EmailSymbol} alt="E-Mail-Symbol"/></a>

            </section>
      </header>
     
    );
  }
  
  export default Header;