import { useState } from 'react';

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar(){
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <header>
      
      <nav className="main-nav">
      <a className="name" href="#"><span className="firstName">Ruben</span> <span className="lastName">Neven</span></a>
      <ul className={`main-nav__list ${isMenuOpen ? 'open' : ''}`}>
              <li>
                  <a  href="#">About</a>
              </li>
              <li>
                  <a href="#">Experience</a>
              </li>
              <li>
                  <a  href="#">Contact me</a>
              </li>
          </ul>
          </nav>  
          <nav className="social-nav"> 
          <ul className="social-nav__list">
            <li>
               <a className="social-nav__link" href="#">
                  <div className="social-nav__icon-wrapper">
                  <FontAwesomeIcon icon={faLinkedinIn} className="icon icon-linkedin"/>
                  
                     <p className="social-nav__text">Linkedin</p>
                  </div>
               </a>
            </li>
            <li>
               <a className="social-nav__link" href="#">
                  <div className="social-nav__icon-wrapper">
                  <FontAwesomeIcon icon={faGithub} className="icon icon-github" />
                     <p className="social-nav__text">Github</p>
                  </div>
               </a>
            </li>
            <li>
               <a className="social-nav__link" href="#">
                  <div className="social-nav__icon-wrapper social-nav__icon-wrapper--mail">
                     <FontAwesomeIcon  icon={faEnvelope} className="icon icon-envelope"/>
                  </div>
               </a>
            </li>
          </ul>
         </nav>
         <button className="btn-mobile-nav" onClick={() => {
            setIsMenuOpen(!isMenuOpen)
         }}>
         <FontAwesomeIcon icon={faBars} className="icon-mobile-nav" />
         </button>
         
   </header>
   )
}