import React, { useState } from 'react';
import logo from "../assets/logo-3.png";
import { Link, withRouter } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const MenuHome = ({ location }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeButton, setActiveButton] = useState('');

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const handleSetActiveButton = (buttonId) => {
        setActiveButton(buttonId);
    }

    return (
        <div>
            <div className="mobile-only">
                <div className="content-menu-mobile">
                    <Link to="/"><img src={logo} className="logo" alt="pitchersales"/></Link>
                    <Hamburger toggled={isMenuOpen} toggle={toggleMenu} className="menu-burger" />
                </div>

                {/* Menu mobile */}
                <div className={`mobile-menu ${isMenuOpen ? 'show-menu' : ''}`}>
                    <Link to="/" onClick={toggleMenu}>
                        <button className="mobile-menu-button">Porteurs de projet</button>
                    </Link><br/>
                    <Link to="/investors" onClick={toggleMenu}>
                        <button className="mobile-menu-button">Investisseurs</button>
                    </Link><br/>
                    <Link to="/consultant" onClick={toggleMenu}>
                        <button className="mobile-menu-button">
                            Conseillers
                        </button>
                    </Link><br/>
                    <button className="mobile-menu-button consultant-btn-menu-mobile" onClick={toggleMenu}>Je m'inscris</button>
                </div>
            </div>

            {/*<div className="desktop-only">*/}
            {/*    <div className="content-menu-desktop d-flex-desktop">*/}
            {/*        <Link to="/"><button className="btn"><img src={logo} className="logo" alt="pitchersales"/></button></Link>*/}
            {/*        <div>*/}
            {/*            <Link to="/"><button className="join-us join-us-consultant">Porteur de projet</button></Link>*/}
            {/*            <Link to="/investors"><button className="join-us join-us-consultant">Investisseurs</button></Link>*/}
            {/*            <Link to="/consultant"><button className="join-us join-us-consultant">Conseillers</button></Link>*/}
            {/*            <button className="btn-menu-subscribe btn-menu-subscribe-c">Je m'inscris</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={`desktop-only ${isMenuOpen ? 'show-menu' : ''}`}>
                <div className="d-flex-desktop style-menu">
                    <Link to="/"><button className="btn"><img src={logo} className="logo" alt="pitchersales" /></button></Link>
                    <div className="d-flex-desktop content-link-menu content-menu-desktop">
                        <Link to="/">
                            <button
                                id="projectHolder"
                                className={`join-us-consultant ${activeButton === 'projectHolder' ? 'active-home' : ''}`}
                                onClick={() => handleSetActiveButton('projectHolder')}
                            >
                                Porteur de projet
                            </button>
                        </Link>
                        <Link to="/investors">
                            <button
                                id="investors"
                                className={`join-us-consultant ${activeButton === 'investors' ? 'active-home' : ''}`}
                                onClick={() => handleSetActiveButton('investors')}
                            >
                                Investisseurs
                            </button>
                        </Link>
                        <Link to="/consultant">
                            <button
                                id="consultants"
                                className={`join-us-consultant ${activeButton === 'consultants' ? 'active-home' : ''}`}
                                onClick={() => handleSetActiveButton('consultants')}
                            >
                                Conseillers
                            </button>
                        </Link>
                        <button className="btn-menu-subscribe btn-menu-subscribe-c">Je m'inscris</button>
                    </div>
                </div>
            </div>

            <div className="tablette-only">
                <div className="content-menu-mobile">
                    <img src={logo} className="logo"/>
                    <Hamburger toggled={isMenuOpen} toggle={toggleMenu} className="menu-burger" />
                </div>
                {/* Menu mobile */}
                <div className={`mobile-menu ${isMenuOpen ? 'show-menu' : ''}`}>
                    <Link to="/" onClick={toggleMenu}>
                        <button className="mobile-menu-button">
                            Porteur de projet
                        </button>
                    </Link><br/>
                    <Link to="/investors" onClick={toggleMenu}>
                        <button className="mobile-menu-button">
                            Investisseurs
                        </button>
                    </Link><br/>
                    <Link to="/consultant" onClick={toggleMenu}>
                        <button className="mobile-menu-button">
                            Conseillers
                        </button>
                    </Link><br/>
                    <button className="mobile-menu-button home-btn-menu-mobile" onClick={toggleMenu}>Je m'inscris</button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(MenuHome);
