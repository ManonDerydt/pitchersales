import React from 'react';
import Fade from "react-reveal/Fade";

class Partners extends React.Component {
    render() {
        return (
            <div id="step" className="content-solutions">
              <h2 className="title-step">Les étapes à suivre pour une levée de fond réussie </h2>
                {/*<span className="emoji-item">&#128077;</span>*/}
              <p className="subtitle-step">Découvrez, Préparez, Conquérez : Votre guide en trois étapes vers un financement efficace.</p>

                <div className="d-flex-desktop content-items">
                    <Fade delay={1000}>
                        <div className="item">
                            <p className="emoji-item">&#128221;</p>
                            <div className="d-flex align-baseline">
                                <span className="number">1-</span>
                                <p className="text-solution">
                                    Inscrivez-vous sur Pitchersales et partagez-nous vos informations
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade delay={1500}>
                        <div className="item">
                            <p className="emoji-item">&#9997;</p>
                            <div className="d-flex align-baseline">
                                <span className="number">2-</span>
                                <p className="text-solution">Notre équipe s'associe à vous pour élaborer la présentation parfaite</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade delay={2000}>
                        <div className="item">
                            <p className="emoji-item">&#127908;</p>
                            <div className="d-flex align-baseline">
                                <span className="number">3-</span>
                                <p className="text-solution">Présentez votre projet face à un panel d'investisseurs dédiés</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>



        )
    }
}

export default Partners

