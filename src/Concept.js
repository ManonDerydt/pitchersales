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
class Concept extends React.Component {
    render() {
        return (
            <div>
                <img src={splash} className="drow"/>
                <div  className="section-concept">
                    <div className="d-flex justify-content-between w-100 content-box-meeting">
                        <div className="block-text-meeting">
                            <div>
                                <h3 className="title-concept">PitcherSales, c'est quoi exactement ?</h3>
                                <p className="text-concept">
                                    PitcherSales c'est la plateforme qui permet aux entreprises de vendre leurs
                                    produits et services via des présentations en ligne.
                                    Avec PitcherSales, vous pouvez économiser du temps et de l'argent en évitant les
                                    déplacements et atteindre un grand nombre de clients potentiels intéressés par vos offres.
                                    démontrez la qualité de vos produits et services de manière professionnelle et personnalisée en utilisant des outils
                                    de présentation modernes et interactifs pour maximiser vos chances de conclure des ventes
                                    rapidement et efficacement.
                                </p>
                            </div>
                            <button className="btn-concept">Découvrir</button>
                        </div>
                        <div className="block-img-meeting">
                            <img src={searchbar2} className="searchbar"/>
                            <div className="block-m">
                                <div className="d-flex justify-content-between">
                                    <div className="block-img-m">
                                        <img src={m1} className="m ml1"/>
                                        <p className="tag-meeting"> Julie, Total</p>
                                    </div>
                                    <div className="block-img-m">
                                        <img src={m3} className="m"/>
                                        <p className="tag-meeting"> Julie, Total</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between second-m">
                                    <div className="block-img-m">
                                        <img src={m2} className="m ml1"/>
                                        <p className="tag-meeting"> Julie, Total</p>
                                    </div>
                                    <div className="block-img-m">
                                        <img src={m4} className="m"/>
                                        <p className="tag-meeting"> Julie, Total</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}

export default Concept