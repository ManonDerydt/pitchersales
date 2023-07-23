import React from 'react';
import logo from "./assets/Pitchersales.jpg"

class Menu extends React.Component {
    render() {
        return (
            <div className="content-menu">
                <img src={logo} className="logo" alt="pitchersales"/>
                <div className="buttons-menu">
                    <button className="join-us">Rejoignez-nous</button>
                    <button className="contact">Contactez-nous</button>
                </div>
            </div>
        );
    }
}

export default Menu