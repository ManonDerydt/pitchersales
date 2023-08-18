import React from 'react';
import Fade from 'react-reveal/Fade';

class Concept extends React.Component {
    render() {
        return (
            <div>
                {/*<img src={splash} className="drow"/>*/}
                <div  className="section-concept" id="concept">
                    <div className="w-100 content-box-meeting text-center">
                        <div className="block-text-meeting">
                            <div>
                                <div>
                                    <h3 className="title-concept">Performons ensemble<span className="emoji-item-concept-title">&#128640;</span></h3>
                                </div>

                                <p className="text-concept">
                                    Chaque projet mérite une chance de briller. Avec notre réseau d'investisseurs
                                    et nos outils dédiés, nous mettons tout en œuvre pour transformer votre vision en réalité
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="d-flex-desktop">
                                    <Fade left delay={900}>
                                        <div className="block-concept align-baseline">
                                            <h2 className="big-title-concept">
                                                Obtenez un accès privilégié à un réseau diversifié d'investisseurs correspondant à vos
                                                besoins et assurez le succès de votre levée de fonds
                                                <p className="emoji-item-concept">&#128184;</p>
                                            </h2>
                                        </div>
                                    </Fade>

                                    <Fade right delay={1200}>
                                        <div className="block-concept align-baseline">
                                            <h2 className="big-title-concept">
                                                Pitchez votre projet en ligne, atteignez des investisseurs au-delà de votre zone
                                                géographique et touchez un public plus vaste que jamais
                                                <p className="emoji-item-concept">&#128249;</p>
                                            </h2>
                                        </div>
                                    </Fade>

                                </div>
                                <div className="d-flex-desktop">
                                    <Fade left delay={1600}>
                                        <div className="block-concept align-baseline">
                                            <h2 className="big-title-concept">PitcherSales, c'est aussi une communauté solidaire de startups unies
                                                qui se soutiennent dans la poursuite de leur réussite
                                            </h2>
                                            <p className="emoji-item-concept">&#127919;</p>
                                        </div>
                                    </Fade>
                                    <Fade right delay={1800}>
                                        <div className="block-concept align-baseline">
                                            <h2 className="big-title-concept">
                                                Nous proposons des formations pour affiner vos pitchs et atteindre un niveau de performance optimal.
                                                Faites la différence
                                            </h2>
                                            <p className="emoji-item-concept">&#128081;</p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#step"><button className="learn-more learn-more-concept">Découvrir</button></a>
                </div>
            </div>
        )
    }
}

export default Concept