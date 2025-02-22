import React, { useState } from 'react';
import { ReactComponent as LogoImage } from './images/logo.svg';
import { ReactComponent as ShoppingCartImage } from './images/shopping-cart-gradient.svg';
import EarthImage from './images/earth.png';
import './App.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header__content-wrapper container">
          <div className="header__logo">
            <LogoImage />
          </div>
          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
            <ul className="nav__list">
              <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Products</a></li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  <div className="header__cart">
                    <ShoppingCartImage className="header__cart-image" />
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          
          <button 
            className={"burger-menu " + (menuOpen ? " burger-menu--open" : "")} 
            onClick={toggleMenu}
          >
            <span className="burger-menu__line"></span>
            <span className="burger-menu__line"></span>
            <span className="burger-menu__line"></span>
          </button>
        </div>
      </header>

      <section className="hero container-big">
        <div className='hero__content-wrapper container'>
          <div className="hero__content">
            <h1 className="hero__title">
              Discover the vast expanses of <span className="hero__title-highlight">space</span>
            </h1>
            <p className="hero__subtitle">Where the possibilities are <span className="hero__subtitle-highlight">endless</span>!</p>
            <button className="button button--primary">Learn more</button>
          </div>
          <div className="hero__image">
            <img src={EarthImage} alt="Earth" className="hero__earth" />
            <div className="hero__satellite"></div>
          </div>
        </div>
      </section>

      <section className="offers container">
        <h2 className="offers__title">Offers</h2>
        
        <div className="card-grid">
          <div className="card-grid__item card card--reality">
            <div className="card__content">
              <h3 className="card__title">Move the borders of reality!</h3>
              <p className="card__subtitle">Go on a space adventure - it's possible with us!</p>
              <button className="button button--secondary">Learn more</button>
            </div>
          </div>

          <div className="card-grid__item card card--stars-planets">
            <div className="card__content">
              <h3 className="card__title">Space is not just stars and planets</h3>
              <p className="card__subtitle">Go on a space adventure</p>
              <button className="button button--secondary">Learn more</button>
            </div>
          </div>

          <div className="card-grid__item card card--dreamers">
            <div className="card__content">
              <h3 className="card__title">For those who dream of stars</h3>
              <p className="card__subtitle">Our offer make your dream come true</p>
              <button className="button button--secondary">Learn more</button>
            </div>
          </div>

          <div className="card-grid__item card card--dreams">
            <div className="card__content">
              <h3 className="card__title">Fulfill your fantastic dreams</h3>
              <p className="card__subtitle">Space has never been so close</p>
              <button className="button button--secondary">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      <section className="journey container">
        <h2 className="journey__title">Embark on a space journey</h2>
        <p className="journey__text">
          Traveling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you make this dream come true. Our space tourism program offers a unique opportunity to see the Earth from a height of several hundred kilometers and feel that every moment is spent with incredible impressions. Experience and see for yourself! Our ship is equipped with the most modern technology and comfort so that you can fully enjoy your adventure in space. We offer several different tour packages that will suit the needs of both beginners and experienced space travelers.
        </p>
      </section>

      <footer className="footer">
        <div className="footer__content container">
          <div className="footer__icon">🚀</div>
          <p className="footer__text">Exciting space adventures!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;