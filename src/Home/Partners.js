import React from 'react';
import Fade from "react-reveal/Fade";
import bg from "../assets/gift.png"
import styled from "styled-components";

// const Background = styled.div`
//   background-image: url(${bg});
//   background-size: cover;
//   background-position: center;
//   padding: 3%;
//   border-radius: 40px;
//   `;

class Partners extends React.Component {
    render() {
        return (
            <div>
                <Fade bottom delay={200}>
                    <div id="step" className="content-solutions d-flex-desktop">
                        {/*<Background>*/}
                        <div>
                            <h2 className="title-step">Pitchersales, c'est la certitude <span className="pink-color">d'un financement réussi</span></h2>
                            {/*<span className="emoji-item">&#128077;</span>*/}
                            <p className="subtitle-step">
                                "Pitchersales est une solution unique qui permet à n'importe quel porteur de projet de lancer son business. "
                            </p>
                        </div>

                            <img src={bg} className="gift"/>
                        {/*</Background>*/}
                    </div>
                </Fade>


                {/*<div className="d-flex-desktop content-items">*/}
                {/*    <Fade delay={1000}>*/}
                {/*        <div className="item">*/}
                {/*            <p className="emoji-item">&#128221;</p>*/}
                {/*            <div className="d-flex align-baseline">*/}
                {/*                <span className="number">1-</span>*/}
                {/*                <p className="text-solution">*/}
                {/*                    Inscrivez-vous sur Pitchersales et partagez-nous vos informations. et empêche de se concentrer sur la mise en page elle-même.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </Fade>*/}
                {/*    <Fade delay={1500}>*/}
                {/*        <div className="item">*/}
                {/*            <p className="emoji-item">&#9997;</p>*/}
                {/*            <div className="d-flex align-baseline">*/}
                {/*                <span className="number">2-</span>*/}
                {/*                <p className="text-solution">Notre équipe s'associe à vous pour élaborer la présentation parfaite. et empêche de se concentrer sur la mise en page elle-même.</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </Fade>*/}
                {/*    <Fade delay={2000}>*/}
                {/*        <div className="item">*/}
                {/*            <p className="emoji-item">&#127908;</p>*/}
                {/*            <div className="d-flex align-baseline">*/}
                {/*                <span className="number">3-</span>*/}
                {/*                <p className="text-solution">Présentez votre projet face à un panel d'investisseurs dédiés</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </Fade>*/}
                {/*</div>*/}
                {/*<a href="#step"><button className="learn-more learn-more-concept">Découvrir</button></a>*/}
            </div>



        )
    }
}

export default Partners

