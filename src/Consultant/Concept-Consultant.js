import React from 'react';
import Fade from 'react-reveal/Fade';
import invest from "../assets/invest.png"
import team from "../assets/team.png"
import consultant from "../assets/consultant.png"

class ConceptInvestors extends React.Component {
    render() {
        return (
            <div>
                {/*<img src={splash} className="drow"/>*/}
                <Fade bottom >
                    <div  className="section-concept" id="concept">
                        <div className="w-100 content-box-meeting text-center">
                            <div>
                                <h2 className="special-color title-offers">Transformer les talents en <br/><span className="red-color"> success stories.</span></h2>
                            </div>

                            <p className="text-concept">
                                De nos jours, accompagner les startups prometteuses à peaufiner leur discours, leur vision et leur stratégie est un défi.
                                Cela exige d'être constamment au fait des tendances, d'avoir une pédagogie adaptée et une véritable empathie pour ces entrepreneurs
                                en herbe. Avec Pitchersales, cet accompagnement est porté à un autre niveau ! Fini les séances de coaching génériques.
                                Nous vous connectons directement avec des startups et porteurs de projets dynamiques, vous permettant de les guider,
                                de les conseiller et de les préparer à des présentations impactantes devant des investisseurs en ligne. Ne vous contentez
                                pas d'être un simple conseiller, devenez le mentor qui propulse les pépites de demain.
                            </p>

                            <Fade bottom delay={100}>
                                <div className="block-text-meeting">
                                    <Fade bottom delay={200}>
                                        <div className="w-30">
                                            <img src={team} className="pic-concept"/>
                                            {/*<h3 className="txt-w">Une équipe à ta disposition</h3> */}
                                            <h3 className="txt-w text-center">1. Inscrivez-vous en moins <br/>de deux minutes</h3>
                                            <p className="small-title-w text-center">
                                                Tout se fait en ligne, plongez au cœur d'un écosystème de projets et startups prometteurs .
                                            </p>
                                        </div>
                                    </Fade>

                                    <Fade  bottom delay={300}>
                                        <div className="w-30">
                                            <img src={invest} className="pic-concept"/>
                                            {/*<h3 className="txt-w">Des investisseurs au top</h3>*/}
                                            <h3 className="txt-w text-center">2. Configurez votre profil conseiller</h3>
                                            <p className="small-title-w text-center">
                                                Personnalisez vos préférences en termes de secteur, du stade de maturité et d'investissement.
                                            </p>
                                        </div>
                                    </Fade>

                                    <Fade bottom delay={400}>
                                        <div className="w-30">
                                            <img src={consultant} className="pic-concept"/>
                                            {/*<h3 className="txt-w">Des conseillers dédiés</h3>*/}
                                            <h3 className="txt-w text-center">3. Coacher les pitchers <br/>en ligne et lancez-vous</h3>
                                            <p className="small-title-w text-center">
                                                Rencontrez les fondateurs, découvrez leurs projets et trouver la stratégie parfaite.
                                            </p>
                                        </div>
                                    </Fade>
                                </div>
                                <button className="btn-cta-c">
                                    Découvrir les projets
                                </button>
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

export default ConceptInvestors