import React from 'react';
import pic1 from '../assets/offers/glass-eyes.png'
import pic2 from '../assets/offers/heart-eyes.png'
import pic3 from '../assets/offers/stars-eyes.png'
import check from '../assets/yellow-check.png'
import cadenas from '../assets/cadenas.png'
import Fade from "react-reveal/Fade";

class Header extends React.Component {
    render() {
        return (
            <div>
                <Fade bottom>
                    <div className="content-offers">
                        <p className="mini-title-offers">À votre tour</p>
                        <h2 className="special-color title-offers">Découvrez nos offres et <br/><span className="color-orange">commencez l'aventure</span></h2>

                        <div className="content-block-offers">
                            <Fade bottom delay={200}>
                                <div className="block-tarif">
                                    <div className="text-center">
                                        <div className="d-flex-desktop w-100">
                                            <div className="emoji-offers"></div>
                                            <div className="d-flex-desktop w-100">
                                                <div className="content-title-offers-block1 block-1">
                                                    <img src={pic1} className="bitmoji"/>
                                                </div>
                                                <div className="content-offers-price">
                                                    <h3 className="tittle-offers-1">Offre Premium</h3>
                                                    <h3 className="price">1000€</h3>
                                                    <p className="small-title-offers">Paiement en une fois</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="text-left text-offers">
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une présentation devant 15 investisseurs</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une sélection d'investisseurs </p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Accès à la communauté Pitchersales</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Accès à un conseiller</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Support de présentation</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une présentation devant 10 investisseurs</p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une sélection d'investisseurs </p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-O">Accès à la communauté Pitchersales</p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom delay={300}>
                                <div className="block-tarif">
                                    <div className=" text-center">
                                        <div className="d-flex-desktop w-100">
                                            <div className="emoji-offers"></div>
                                            <div className="d-flex-desktop w-100">
                                                <div className="content-title-offers-block1 block-2">
                                                    <img src={pic2} className="bitmoji"/>
                                                </div>
                                                <div className="content-offers-price">
                                                    <h3 className="tittle-offers-2">Offre Silver</h3>
                                                    <h3 className="price">1800€</h3>
                                                    <p className="small-title-offers">Paiement en une fois</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="text-left text-offers">
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une présentation devant 15 investisseurs</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une sélection d'investisseurs </p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Accès à la communauté Pitchersales</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Accès à un conseiller</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Support de présentation</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une présentation devant 10 investisseurs</p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une sélection d'investisseurs </p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-O">Accès à la communauté Pitchersales</p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom delay={400}>
                                <div className="block-tarif">
                                    <div className=" text-center">
                                        <div className="d-flex-desktop w-100">
                                            <div className="emoji-offers">
                                            </div>
                                            <div className="d-flex-desktop w-100">
                                                <div className="content-title-offers-block1 block-3">
                                                    <img src={pic3} className="bitmoji"/>
                                                </div>
                                                <div className="content-offers-price">
                                                    <h3 className="tittle-offers-3">Offre Gold</h3>
                                                    <h3 className="price">3000€</h3>
                                                    <p className="small-title-offers">Paiement en une fois</p>
                                                </div>

                                            </div>
                                        </div>
                                        <hr className="hr"/>

                                        <div className="text-left text-offers">
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une présentation devant 15 investisseurs</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une sélection d'investisseurs </p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Accès à la communauté Pitchersales</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Accès à un conseiller</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Support de présentation</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une présentation devant 10 investisseurs</p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-0">Une sélection d'investisseurs </p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop justify-content-between">
                                                <p className="m-b-O">Accès à la communauté Pitchersales</p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </Fade>

            </div>
        )
    }
}

export default Header