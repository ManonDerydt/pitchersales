import React from 'react';
import check from "../assets/check.png"
import success from "../assets/success.jpeg"
import Fade from "react-reveal/Fade";

class Advantages extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex-desktop content-advantages">
                    <Fade bottom>
                        <div>
                            <img src={success} className="success-img"/>
                        </div>
                    </Fade>
                    <Fade bottom delay={200}>
                        <div>
                            <h2 className="title-advantages">Un accompagnement personnalisé</h2>

                            <div className="block-advantage">
                                <div className="d-flex-desktop">
                                    <img src={check} className="check"/>
                                    <p className="text-advantage">Testez votre éligibilité en remplissant le formulaire (3 minutes)</p>
                                </div>
                                <div className="d-flex-desktop">
                                    <img src={check} className="check"/>
                                    <p className="text-advantage">Testez votre éligibilité en remplissant le formulaire (3 minutes)</p>
                                </div>
                                <div className="d-flex-desktop">
                                    <img src={check} className="check"/>
                                    <p className="text-advantage">Testez votre éligibilité en remplissant le formulaire (3 minutes)</p>
                                </div>
                                <div className="d-flex-desktop">
                                    <img src={check} className="check"/>
                                    <p className="text-advantage">Testez votre éligibilité en remplissant le formulaire (3 minutes)</p>
                                </div>
                                <div className="d-flex-desktop">
                                    <img src={check} className="check"/>
                                    <p className="text-advantage">Testez votre éligibilité en remplissant le formulaire (3 minutes)</p>
                                </div>
                                <div className="d-flex-desktop">
                                    <img src={check} className="check"/>
                                    <p className="text-advantage">Testez votre éligibilité en remplissant le formulaire (3 minutes)</p>
                                </div>
                            </div>

                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Advantages
