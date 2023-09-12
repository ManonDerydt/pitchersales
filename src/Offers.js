import React from 'react';
import pic1 from './assets/pic-4.jpg'
import pic2 from './assets/pic-5.jpg'
import pic3 from './assets/img-hands.jpg'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className="big-title">
                    <span className="special-color">Nos offres</span>
                </h1>
                <h2 className="subtitle">
                    Avec Pitchersales, présentez votre projet à un réseau mondial d'investisseurs lors de séances de pitch en ligne
                </h2>
                <a href="#concept"><button className="learn-more">Découvrir</button></a>

                <div className="content-block-offers">
                    <div className="block-tarif block-1 text-center">
                        <h3>Offre Premium</h3>
                        <h3>1000€</h3>
                        <div className="text-left">
                            <p>Une présentation devant 5 investisseurs</p>
                            <p>Une sélection d'investisseurs </p>
                            <p>Accès à la communauté Pitchersales</p>
                        </div>

                    </div>
                    <div className="block-tarif block-2 text-center">
                        <h3>Offre Silver</h3>
                        <h3>1800€</h3>
                        <div className="text-left ">
                            <p>Une présentation devant 10 investisseurs</p>
                            <p>Une sélection d'investisseurs </p>
                            <p>Accès à la communauté Pitchersales</p>
                        </div>

                    </div>
                    <div className="block-tarif block-3 text-center">
                        <h3>Offre Gold</h3>
                        <h3>3000€</h3>
                        <div className="text-left">
                            <p>Une présentation devant 15 investisseurs</p>
                            <p>Une sélection d'investisseurs </p>
                            <p>Accès à la communauté Pitchersales</p>
                            <p>Accès à un conseiller</p>
                            <p>Support de présentation</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Header