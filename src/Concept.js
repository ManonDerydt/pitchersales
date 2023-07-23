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
                {/*<img src={splash} className="drow"/>*/}
                <div  className="section-concept">
                    <div className="w-100 content-box-meeting text-center">
                        <div className="block-text-meeting">
                            <div>
                                <h3 className="title-concept">PitcherSales, c'est quoi exactement ?</h3>
                                <p className="text-concept">
                                    PitcherSales c'est la plateforme qui permet aux entreprises de vendre leurs
                                    produits et services via des présentations en ligne.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="d-flex">
                                    <div className="block-concept">
                                        <h2>Accédez à un panel d'investisseurs </h2>
                                    </div>
                                    <div className="block-concept">
                                        <h2>Gagnez du temps </h2>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="block-concept">
                                        <h2>Rentrez dans une communauté</h2>
                                    </div>
                                    <div className="block-concept">
                                        <h2>Formez-vous et devenez meilleur</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="learn-more">Découvrir</button>
                </div>


            </div>
        )
    }
}

export default Concept