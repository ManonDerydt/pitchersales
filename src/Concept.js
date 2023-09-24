import React from 'react';
import Fade from 'react-reveal/Fade';
import pic1 from "../src/assets/Concept/pic-1.png"
import pic2 from "../src/assets/Concept/pic-2.png"
import pic3 from "../src/assets/Concept/pic-3.png"

class Concept extends React.Component {
    render() {
        return (
            <div>
                {/*<img src={splash} className="drow"/>*/}
                <Fade bottom delay={300}>
                    <div  className="section-concept" id="concept">
                        <div className="w-100 content-box-meeting text-center">
                            <div>
                                <p className="mini-title-offers violet-color">À votre tour</p>
                                <h2 className="special-color title-offers">Qu'est-ce que Pitchersales <br/><span className="violet-color">et en quoi ça consiste</span></h2>
                            </div>

                            <p className="text-concept">
                                Chaque projet mérite une chance de briller. Avec notre réseau d'investisseurs
                                et nos outils dédiés, nous mettons tout en œuvre pour transformer votre vision en réalité.
                            </p>

                            <Fade bottom delay={100}>
                                <div className="block-text-meeting">
                                    <Fade bottom delay={200}>
                                        <div>
                                            <img src={pic1} className="pic-concept"/>
                                            <p className="mini-text-concept">
                                                Peu importe votre secteur d'activité ou votre type de projet.
                                            </p>
                                        </div>
                                    </Fade>

                                    <Fade  bottom delay={300}>
                                        <div>
                                            <img src={pic2} className="pic-concept"/>
                                            <p className="mini-text-concept">
                                                Touchez des investisseurs peu importe votre territoire.
                                            </p>
                                        </div>
                                    </Fade>

                                    <Fade bottom delay={400}>
                                        <div>
                                            <img src={pic3} className="pic-concept"/>
                                            <p className="mini-text-concept">
                                                Où vous voulez et quand vous voulez. Planifiez vos meeting.
                                            </p>
                                        </div>
                                    </Fade>
                                </div>
                            </Fade>
                            {/*<div className="text-center">*/}
                            {/*    <div className="d-flex-desktop">*/}
                            {/*        <Fade left delay={900}>*/}
                            {/*            <div className="block-concept align-baseline">*/}
                            {/*                <h2 className="big-title-concept">*/}
                            {/*                    Obtenez un accès privilégié à un réseau diversifié d'investisseurs correspondant à vos*/}
                            {/*                    besoins et assurez le succès de votre levée de fonds*/}
                            {/*                    <p className="emoji-item-concept">&#128184;</p>*/}
                            {/*                </h2>*/}
                            {/*            </div>*/}
                            {/*        </Fade>*/}

                            {/*        <Fade right delay={1200}>*/}
                            {/*            <div className="block-concept align-baseline">*/}
                            {/*                <h2 className="big-title-concept">*/}
                            {/*                    Pitchez votre projet en ligne, atteignez des investisseurs au-delà de votre zone*/}
                            {/*                    géographique et touchez un public plus vaste que jamais*/}
                            {/*                    <p className="emoji-item-concept">&#128249;</p>*/}
                            {/*                </h2>*/}
                            {/*            </div>*/}
                            {/*        </Fade>*/}

                            {/*    </div>*/}
                            {/*    <div className="d-flex-desktop">*/}
                            {/*        <Fade left delay={1600}>*/}
                            {/*            <div className="block-concept align-baseline">*/}
                            {/*                <h2 className="big-title-concept">PitcherSales, c'est aussi une communauté solidaire de startups unies*/}
                            {/*                    qui se soutiennent dans la poursuite de leur réussite*/}
                            {/*                </h2>*/}
                            {/*                <p className="emoji-item-concept">&#127919;</p>*/}
                            {/*            </div>*/}
                            {/*        </Fade>*/}
                            {/*        <Fade right delay={1800}>*/}
                            {/*            <div className="block-concept align-baseline">*/}
                            {/*                <h2 className="big-title-concept">*/}
                            {/*                    Nous proposons des formations pour affiner vos pitchs et atteindre un niveau de performance optimal.*/}
                            {/*                    Faites la différence*/}
                            {/*                </h2>*/}
                            {/*                <p className="emoji-item-concept">&#128081;</p>*/}
                            {/*            </div>*/}
                            {/*        </Fade>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        {/*<a href="#step"><button className="learn-more learn-more-concept">Découvrir</button></a>*/}
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Concept