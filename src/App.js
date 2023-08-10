import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Header from "./Header";
import Parters from "./Partners";
import Footer from "./Footer";
import Concept from "./Concept";
import Subscribe from "./Subscribe";
import cookie from "../src/assets/cookie.png"
import Visio from "./Visio";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import React, { useState, useEffect } from 'react';

function App() {
    const [showBanner, setShowBanner] = useState(false);

    // Vérifiez le choix précédent de l'utilisateur au chargement du composant
    useEffect(() => {
        const userChoice = localStorage.getItem('userCookieChoice');
        if (!userChoice) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('userCookieChoice', 'accepted');
        setShowBanner(false);
    };

    const refuseCookies = () => {
        localStorage.setItem('userCookieChoice', 'refused');
        setShowBanner(false);
    };

    console.log('User Cookie Choice: ', localStorage.getItem('userCookieChoice'));

  return (
    <div className="App">

        {showBanner && (
            <div id="cookiePopup">
                <img src={cookie} alt="cookie" className="cookie" />
                <p>
                    Notre site utilise des cookies pour assurer son bon fonctionnement et améliorer votre expérience de navigation.
                    Avant de poursuivre, merci d'accepter
                    ou de refuser l'utilisation des cookies.
                </p>
                <div className="d-flex content-button-cookies">
                    <button className="accept-cookie" onClick={acceptCookies}>Accepter</button>
                    <button className="refuse-cookie" onClick={refuseCookies}>Refuser</button>
                </div>
            </div>
        )}
        <Menu />
      <header className="App-header">
        <Header />
      </header>

        <section>
            <Concept />
        </section>

        {/*<section>*/}
        {/*    <Visio />*/}
        {/*</section>*/}

        <section>
            <Parters />
        </section>

       {/* <section className="buyer-section">*/}
       {/*     <Solution />*/}
       {/*</section>*/}

        {/*<section>*/}
        {/*    <Advantages />*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*    <Meetings />*/}
        {/*</section>*/}

        <section>
            <Subscribe />
        </section>

        {/*<section>*/}
        {/*    <Faq />*/}
        {/*</section>*/}

        <section>
            <Footer />
        </section>
    </div>
  );
}

export default App;
