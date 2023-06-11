import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="content-menu">
                    <h2 className="title">PitcherSales</h2>
                    <ul className="menu">
                        <li>Accueil</li>
                        <li>Produits</li>
                        <li>Meeting</li>
                        <li>FAQ</li>
                    </ul>
                <div className="buttons-menu">
                    <button className="signIn">Inscription</button>
                    <button className="logIn">Connexion</button>
                </div>


            </div>
        );
    }
}

export default Menu