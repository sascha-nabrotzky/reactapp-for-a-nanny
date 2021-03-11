import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

function Footer() {

    return (
  
      <>
          <footer>
            <ul className="footerListItems">
                <li className="footerLink">
                    <Link to="/impressum">Impressum</Link>
                  </li>
                <li className="footerLink">
                  <Link to="/datenschutz">Datenschutz</Link>
                </li>
            </ul>
          </footer>

            
      </>
     
    );
  }
  
  export default Footer;