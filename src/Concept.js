import React from 'react';
import searchbar from '../src/assets/searchbar.png'
import searchbar2 from '../src/assets/searchbar2.png'
import meeting from '../src/assets/meeting.png'
import m1 from '../src/assets/m1.jpg'
import m2 from '../src/assets/m2.jpg'
import m3 from '../src/assets/m3.jpg'
import m4 from '../src/assets/m4.jpg'
import drow from '../src/assets/drow.png'
import splash from '../src/assets/splash.png'
import visio from "./assets/visio.png";
class Concept extends React.Component {
    render() {
        return (
            <div>
                {/*<img src={splash} className="drow"/>*/}
                <div  className="section-concept">
                    <div className="w-100 content-box-meeting text-center">
                        <div className="block-text-meeting">
                            <div>
                                <div>
                                    <h3 className="title-concept">Performons ensemble<span className="emoji-item-concept">&#128640;</span></h3>
                                </div>

                                <p className="text-concept">
                                    PitcherSales c'est la plateforme qui permet aux entreprises de vendre leurs
                                    produits et services via des présentations en ligne.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="d-flex">
                                    <div className="block-concept align-baseline">
                                        <h2 className="big-title-concept">
                                            Obtenez un accès privilégié à un réseau diversifié d'investisseurs correspondant à vos
                                            besoins et assurez le succès de votre levée de fonds
                                            <p className="emoji-item-concept">&#128184;</p>
                                        </h2>
                                    </div>
                                    <div className="block-concept align-baseline">
                                        <h2 className="big-title-concept">
                                            Pitchez votre projet en ligne, atteignez des investisseurs au-delà de votre zone
                                            géographique et touchez un public plus vaste que jamais
                                            <p className="emoji-item-concept">&#128249;</p>
                                        </h2>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="block-concept align-baseline">
                                        <h2 className="big-title-concept">PitcherSales, c'est aussi une communauté solidaire de startups unies
                                             et se soutiennent dans la poursuite de leur réussite.
                                        </h2>
                                        <p className="emoji-item-concept">&#127919;</p>
                                    </div>
                                    <div className="block-concept align-baseline">
                                        <h2 className="big-title-concept">
                                            Nous proposons des formations pour affiner vos pitchs et atteindre un niveau de performance optimal.
                                            Faites la différence.
                                        </h2>
                                        <p className="emoji-item-concept">&#128081;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="learn-more learn-more-concept">Découvrir</button>
                </div>
            </div>
        )
    }
}

export default Concept