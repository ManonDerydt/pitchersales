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
                                <h2 className="title-com">Arrivé jusqu'ici, il te reste<br/><span className="color-orange">3 solutions.</span></h2>
                                <p className="txt-com">1. Tu ne fais rien et penses que tu n'es pas prêt. <br/>2. Tu continues à courir seul derrière les
                                    investisseurs sans succès.<br/> 3. Tu décides de rejoindre la communauté Pitchersales pour bénéficier de notre éco-système taillé pour que tu réussises.
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
