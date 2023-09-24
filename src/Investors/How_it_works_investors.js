import React from "react";
import Fade from "react-reveal/Fade";

class HowItWorks extends React.Component {
    render() {
        return (
            <div>
                <Fade bottom>
                    <h2 className="title-H">Commenncez dès maintenant</h2>
                    <p className="text-center">Avec Pitchersales, c'est très simple</p>
                    <div className="d-flex-desktop content-block-H">
                        <Fade bottom delay={200}>
                            <div className="block-H block-H-1">1</div>
                        </Fade>
                        <Fade bottom delay={350}>
                            <div className="block-H block-H-1">2</div>
                        </Fade>
                       <Fade bottom delay={450}>
                           <div className="block-H block-H-1">3</div>
                       </Fade>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default HowItWorks