import React from 'react';
import Fade from "react-reveal/Fade";
import pic1 from "../assets/subscribe/pic-7.png"
import pic2 from "../assets/subscribe/pic-5.png"
import pic3 from "../assets/subscribe/pic-6.png"

class Community extends React.Component {
    render() {
        return (
            <div className="section-community">
                <div className="d-flex-desktop">
                    <Fade bottom>
                        <div className="d-flex-desktop content-community">
                            <div className="text-com">
                                <h2 className="title-com">Arrivé jusqu'ici, il vous reste <br/><span className="color-orange">3 options.</span></h2>
                                <p className="txt-com">
                                    1. Vous continuez à passer à côté de potentielles opportunités innovantes. <br/>
                                    2. Vous passez d'innombrables heures à chercher des startups prometteuses sans garantie de qualité. <br/>
                                    3. Vous rejoignez Pitchersales et accédez à un vivier de startups triées sur le volet, prêtes à transformer leur industrie.
                                </p>
                                <button className="btn-com">Je passe à l'étape supérieure</button>
                            </div>

                            <div className="d-flex-desktop content-img-com">
                                {/*<img src={pic1} className="pic-header"/>*/}
                                <img src={pic1} className="pic-header"/>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Community
