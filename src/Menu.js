import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="content-menu">
                    <h2 className="title"><span className="violet">Pitcher</span><span className="blue">Sales</span></h2>
                    {/*<ul className="menu">*/}
                    {/*    <li>Accueil</li>*/}
                    {/*    <li>Produits</li>*/}
                    {/*    <li>Meeting</li>*/}
                    {/*    <li>FAQ</li>*/}
                    {/*</ul>*/}
                <div className="buttons-menu">
                    <button className="signIn">Connexion</button>
                    <button className="logIn">Inscription</button>
                </div>


            </div>
        );
    }
}

export default Menu