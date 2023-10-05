import React from 'react';
import Fade from "react-reveal/Fade";
import bg from "../assets/solution/pic-14.png"
import styled from "styled-components";

// const Background = styled.div`
//   background-image: url(${bg});
//   background-size: cover;
//   background-position: center;
//   padding: 3%;
//   border-radius: 40px;
//   `;

class GameChanger extends React.Component {
    render() {
        return (
            <div>
                <Fade bottom delay={200}>
                    <div id="step" className="content-solutions text-center">
                        {/*<Background>*/}
                        <div className="block-1-solution">
                            <h2 className="title-step-c">Soyez un Game Changer<span className="red-color"><br/>pour les startups de demain.</span></h2>
                            <p className="txt-solutions-c">
                                Chaque conseil, chaque insight, chaque moment de mentorat peut bouleverser le destin d'un projet. En tant que conseiller chez Pitchersales, vous avez le
                                pouvoir d'être ce pivot décisif dans la trajectoire d'une startup. Votre expertise et votre engagement peuvent transformer une idée prometteuse en
                                une entreprise florissante. Rejoignez-nous, et soyez la différence qui propulse une startup vers le succès.
                            </p>
                            <button className="btn-cta-end-c">Je découvre</button>

                        </div>
                    </div>
                </Fade>
            </div>



        )
    }
}

export default GameChanger

