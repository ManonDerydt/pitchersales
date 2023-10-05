import React, { useState } from 'react';
import logo from "../assets/logo-2.png";
import { Link, withRouter } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const MenuHome = ({ location }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

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

            <div className="desktop-only">
                <div className="content-menu-desktop d-flex-desktop">
                    <Link to="/"><button className="btn"><img src={logo} className="logo" alt="pitchersales"/></button></Link>
                    <div>
                        <Link to="/"><button className="join-us join-us-consultant">Porteur de projet</button></Link>
                        <Link to="/investors"><button className="join-us join-us-consultant">Investisseurs</button></Link>
                        <Link to="/consultant"><button className="join-us join-us-consultant">Conseillers</button></Link>
                        <button className="btn-menu-subscribe btn-menu-subscribe-c">Je m'inscris</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(MenuHome);
