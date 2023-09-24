import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect, useLocation} from 'react-router-dom';
import Menu from './Menu'
import Header from "./Home/Header";
import Parters from "./Home/Partners";
import Footer from "./Footer";
import Concept from "./Concept";
import Subscribe from "./Subscribe";
import cookie from "../src/assets/cookie.png"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import React, { useState, useEffect } from 'react';
import Solution from "./Home/Solution";
import Headband from "./Home/HeadBand";
import Offers from "./Home/Offers";
import Investors from "./Investors";
import Builder from "./Builder";
import Product from "./Product";
import Advantages from "./Home/Advantages";
import HeaderInvestors from "./Investors/Header-investors";

function SectionInvestors() {
    const location = useLocation();

    if (location.pathname === '/investors') {

        return <Investors />;
    }

    return (
        <>
        </>
    );
}

function SectionBuilders() {
    const location = useLocation();

    if (location.pathname === '/builders') {
        return <Builder />;
    }

    return (
        <>
        </>
    );
}


function App() {
    const [showBanner, setShowBanner] = useState(false);

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

    return (
        <div className="App">
            {showBanner && (
                <div className="cookie-banner">
                    <img src={cookie} alt="cookie" className="cookie-image" />
                    <p>
                        Nous utilisons des cookies pour améliorer votre expérience. En continuant à utiliser notre site, vous acceptez notre politique en matière de cookies.
                    </p>
                    <button className="accept-button" onClick={acceptCookies}>
                        Accepter
                    </button>
                </div>
            )}

            <BrowserRouter>
                <div className="menu-header-bg">
                    <Menu />
                </div>
                <Switch>
                    <Route path="/investors" component={Investors} exact />
                    <Route path="/builders" component={Builder} exact />
                    <Route path="/home" render={() => (
                        <>
                            <SectionInvestors />
                            <SectionBuilders />
                            <Header/>

                            <section>
                                <Concept/>
                            </section>

                            <section>
                                <Solution />
                            </section>

                            <section>
                                <Parters />
                            </section>

                            {/*<section>*/}
                            {/*    <Advantages/>*/}
                            {/*</section>*/}

                            <section>
                                <Offers />
                            </section>

                            <section className="section-subscribe">
                                <Subscribe/>
                            </section>


                            <section>
                                <Footer />
                            </section>
                        </>
                    )} exact />
                    <Route exact path="/">
                        <Redirect to="/home" exact />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}


export default App;
