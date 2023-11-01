import React from 'react';
import logo from '../src/assets/white-logo.png'
import smallLogo from '../src/assets/small-logo.png'
import {FaInstagram} from "react-icons/fa";
import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs";
import {PiLinkedinLogoBold, PiSnapchatLogoBold, PiTiktokLogo} from "react-icons/pi";
import {FiFacebook, FiTwitter, FiYoutube} from "react-icons/fi";
import {AiOutlineInstagram, AiOutlineLinkedin} from "react-icons/ai";
import {Route} from "react-router-dom";
import Consultant from "./Consultant/Consultant";
class Footer extends React.Component {
    render() {
        return (
            <div className="section-footer">
                <footer id="footer" className="footer">

                    <div className="d-flex-desktop content-footer">
                        <div className="text-center">
                            <img src={smallLogo} className="small-logo"/>
                        </div>

                        <div>
                            <p>En savoir plus</p>
                            <ul className="block-menu-footer">

                                <li><a className="lif" href="/">Entrepreneurs</a></li>
                                <li><a  className="lif" href="/investors">Investisseurs</a></li>
                                <li><a  className="lif" href="/consultant">Conseillers</a></li>
                            </ul>
                        </div>

                        <div>
                            <p>Contact</p>
                            <ul className="block-menu-footer">
                                <li><a className="lif" href="mailto:manon@pitchersales.com">manon@pitchersales.com</a></li>
                                <li className="lif">Demande de partenariat</li>
                                <li className="lif">Tarif</li>
                                <li className="lif">Fonctionnalité</li>
                            </ul>
                        </div>

                        <div>
                            <p>À propos</p>
                            <ul className="block-menu-footer">
                                <li className="lif">Nous rejoindre</li>
                                <li className="lif">Inscription à la newsletter</li>
                            </ul>
                        </div>


                    </div>

                    <hr className="hr-footer"/>

                    <div className="d-flex-desktop justify-content-between content-icons">
                        <a href="https://www.instagram.com/pitchersales/" target="_blank">
                            <FaInstagram className="icons-footer icon-instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/pitchersales/?viewAsMember=true" target="_blank">
                            <PiLinkedinLogoBold className="icons-footer icon-linkedin" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61552502016075" target="_blank">
                            <FiFacebook className="icons-footer icon-facebook" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61552502016075" target="_blank">
                            <PiTiktokLogo className="icons-footer icon-facebook" />
                        </a>
                        {/*<a href="https://www.facebook.com/profile.php?id=61552502016075" target="_blank">*/}
                        {/*    <FiYoutube className="icons-footer icon-facebook" />*/}
                        {/*</a>*/}
                        {/*<a href="https://www.facebook.com/profile.php?id=61552502016075" target="_blank">*/}
                        {/*    <FiTwitter className="icons-footer icon-facebook" />*/}
                        {/*</a>*/}
                        {/*<a href="https://www.facebook.com/profile.php?id=61552502016075" target="_blank">*/}
                        {/*    <PiSnapchatLogoBold className="icons-footer icon-facebook" />*/}
                        {/*</a>*/}
                    </div>

                    <p className="text-footer">
                        Pitchersales agit en qualité de plateforme de mise en relation entre startups et investisseurs.
                        Notre mission est centrée sur la facilitation des échanges et la promotion d'opportunités d'investissement
                        innovantes. Bien que nous soyons engagés à connecter des porteurs de projets prometteurs avec des
                        investisseurs potentiels, il est important de noter que Pitchersales ne fournit pas de services
                        financiers directement et n'agit pas en tant qu'intermédiaire financier. Notre rôle est purement consultatif,
                        visant à soutenir et à enrichir l'écosystème entrepreneurial.
                    </p>
                    <div className="d-flex text-center">
                        {/*<button className="btn-footer">*/}
                        {/*    <a href="mailto:derydtmanon@gmail.com">Contactez-nous <span className="emoji-item-footer">&#128233;</span></a>*/}
                        {/*</button>*/}
                    </div>

                    <div className="block-footer">
                        <div className="d-flex">
                            <h2 className="pitchersales">©2023 | Pitchersales</h2>
                        </div>
                    </div>

                </footer>
            </div>
        )
    }
}

export default Footer