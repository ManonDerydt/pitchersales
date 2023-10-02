import React from 'react';
import logo from "../assets/logo-2.png";
import { Link } from 'react-router-dom';

class MenuHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            isCrossVisible: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
    }

    render() {
        return (
            <div>
                <div className="mobile-only">
                    <div className="content-menu-mobile">
                        <Link to="/"><a><img src={logo} className="logo" alt="pitchersales"/></a></Link>


                        {this.state.isMenuOpen && (
                            <div id="navLinks" className='open'>
                                <Link to="/" className="btn-contact"><button className="join-us">Home</button></Link>
                                <Link to="/investors"><button>Investisseurs</button></Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="desktop-only">
                    <div className="content-menu-desktop d-flex-desktop">
                        <Link to="/"><button className="btn"><img src={logo} className="logo" alt="pitchersales"/></button></Link>
                        <div>
                            <Link to="/" className="btn-contact"><button className="join-us">Porteur de projet</button></Link>
                            <Link to="/investors"><button className="join-us">Investisseurs</button></Link>
                            <Link to="/consultant"><button className="join-us">Conseillers</button></Link>
                            <button className="btn-menu-subscribe-c">Je m'inscris</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuHome;