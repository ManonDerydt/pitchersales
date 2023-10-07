import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect, useLocation} from 'react-router-dom';
import MenuHome from './Home/Menu-home'
import Header from "./Home/Header";
import Parters from "./Home/Partners";
import Footer from "./Footer";
import Concept from "./Home/Concept";
import Subscribe from "./Subscribe";
import cookie from "../src/assets/cookie.png"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import React, { useState, useEffect } from 'react';
import Solution from "./Home/Solution";
import Headband from "./Home/HeadBand";
import Offers from "./Home/Offers";
import Investors from "./Investors/Investors";
import HeaderInvestors from "./Investors/Header-investors";
import Community from "./Home/Community";
import Consultant from "./Consultant/Consultant";

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

function SectionConsultant() {
    const location = useLocation();

    if (location.pathname === '/consultant') {
        return <Consultant />;
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
            <div className="loader">
                <svg>
                    <circle cx="50" cy="50" r="45"></circle>
                </svg>
            </div>
            {/*{showBanner && (*/}
            {/*    <div className="cookie-banner">*/}
            {/*        <img src={cookie} alt="cookie" className="cookie-image" />*/}
            {/*        <p>*/}
            {/*            Nous utilisons des cookies pour améliorer votre expérience. En continuant à utiliser notre site, vous acceptez notre politique en matière de cookies.*/}
            {/*        </p>*/}
            {/*        <button className="accept-button" onClick={acceptCookies}>*/}
            {/*            Accepter*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*)}*/}

            <BrowserRouter>
                <Switch>
                    <Route path="/investors" component={Investors} exact />
                    <Route path="/consultant" component={Consultant} exact />
                    <Route path="/home" render={() => (
                        <>
                            <SectionInvestors />
                            <SectionConsultant />
                            <div className="menu-header-bg">
                                <MenuHome />
                            </div>
                            <Header/>

                            <section>
                                <Headband/>
                            </section>

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

                            <section>
                                <Community/>
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
