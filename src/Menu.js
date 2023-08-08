import React from 'react';
import logo from "./assets/Pitchersales.jpg"
import menu from "./assets/menu-burger.png";
import cross from "./assets/cross.png"; // Importez votre image de croix ici
import Subscribe from "./Subscribe";
import { Transition } from 'react-transition-group';



class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            isCrossVisible: false  // Utilisez cet état pour savoir si l'image de la croix est affichée
        };
    }

    toggleMenu = () => {
        this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
    }

    render() {
        return (
            <div className="content-menu">
                <img src={logo} className="logo" alt="pitchersales"/>

                {this.state.isMenuOpen && (
                    <div id="navLinks" className='open'>
                        <a href="#subscribe" className="btn-contact"><button className="join-us">Rejoignez-nous</button></a>
                        <a href={Subscribe}><button className="contact">Contactez-nous</button></a>
                    </div>
                )}

                <div className="buttons-menu">
                    <img
                        src={this.state.isMenuOpen ? cross : menu}
                        className="menu-burger"
                        alt="menu-icon"
                        onClick={this.toggleMenu}
                    />
                </div>
            </div>
        );
    }
}

export default Menu;
