import React, {useState} from 'react';
import bg from '../assets/header/bg-header.png'
import pic1 from '../assets/header/header-1.png'
import pic2 from '../assets/header/header-2.png'
import pic3 from '../assets/header/header-3.png'
import pic4 from '../assets/header/header-4.png'
import speak from '../assets/header/speak.png'
import Investors from "../Investors/Investors";
import screen from "../assets/screen.png";
import yellowG from "../assets/header/10.png"
import yellowO from "../assets/header/11.png"
import whiteG from "../assets/header/12.png"
import whiteO from "../assets/header/13.png"

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "investisseur",
        };
    }

    selectOption(option) {
        this.setState({ selected: option });
    }
    render() {
        const { selected } = this.state;

        let imageG = selected === 'investisseur' ? whiteG : yellowG;
        let imageO = selected === 'startup' ? whiteO : yellowO;

        return (
            <div className="content-header-Consultant d-flex-desktop">
                <div>
                    <div className="button-container-investors">
                        <h2 className="big-title-investors">Pitchersales, <br/>
                            <span className="red-color">Conseillez en toute tranquilité</span>
                        </h2>
                        <p className="subtitle-header">On est convaincus : chaque startup et/ou projet peut prospérer avec le bon mentorat.</p>
                        <div className="buttons-investors">
                            <button className={selected === 'investisseur' ? 'mix-btn selected-button-c' : 'mix-btn deselected-button mix-btn-deselected' } onClick={() => this.selectOption('investisseur')}>
                                <img src={imageG} className="icon-btn-menu"/>
                                Investisseur
                            </button>
                            {/*{selected === 'investisseur' && <div>Contenu pour Investisseur</div>}*/}
                            {/*{selected === 'startup' && <div>Contenu pour Startups</div>}*/}
                        </div>

                    </div>
                </div>

                <img src={screen} className="screen"/>
            </div>
            // <div className="d-flex-desktop">
            //     {/*<div className="content-icon-1">*/}
            //     {/*    <img src={speak} className="speak"/>*/}
            //     {/*</div>*/}
            //   <div className="d-flex-desktop content-header">
            //       <div>
            //           <h1 className="big-title">
            //               <span className="special-color">Levez <span className="color-orange">50.000</span> euros en moins de <span className="color-orange">50</span> jours</span>
            //           </h1>
            //           <h2 className="subtitle">
            //               Avec Pitchersales, présentez votre projet à un réseau mondial d'investisseurs lors de séances de pitch en ligne.
            //           </h2>
            //           <div className="button-container">
            //               <button className={selected === 'investisseur' ? 'mix-btn selected-button' : 'mix-btn deselected-button mix-btn-deselected'} onClick={() => this.selectOption('investisseur')}>Investisseur</button>
            //
            //               <button className={selected === 'startup' ? 'mix-btn selected-button' : 'mix-btn deselected-button mix-btn-deselected'} onClick={() => this.selectOption('startup')}>Startups</button>
            //           </div>
            //
            //           {selected === 'investisseur' && <div><Investors/></div>}
            //           {selected === 'startup' && <div>
            //           </div>}
            //
            //       </div>
            //
            //       {/*<div className="container-bg">*/}
            //       {/*    <img src={bg} className="bg"/>*/}
            //       {/*</div>*/}
            //   </div>
            //
            //
            //
            //
            //
            //     {/*<div className="pictures">*/}
            //     {/*    <div className="d-flex-desktop">*/}
            //     {/*        <div className="pic-1">*/}
            //     {/*            <p className="text-center">Entrepreneur</p>*/}
            //     {/*            <img src={pic1} className="pic"/>*/}
            //     {/*        </div>*/}
            //     {/*        <div className="pic-4">*/}
            //     {/*            <p className="text-center">Porteur de projet</p>*/}
            //     {/*            <img src={pic4} className="pic"/>*/}
            //     {/*        </div>*/}
            //
            //     {/*    </div>*/}
            //
            //     {/*    <div className="d-flex-desktop">*/}
            //     {/*        <div className="pic-3">*/}
            //     {/*            <p className="text-center">Conseillers</p>*/}
            //     {/*            <img src={pic3} className=" pic"/>*/}
            //     {/*        </div>*/}
            //     {/*        <div className="pic-2">*/}
            //     {/*            <p className="text-center">Investisseurs</p>*/}
            //     {/*            <img src={pic2} className="pic"/>*/}
            //     {/*        </div>*/}
            //     {/*    </div>*/}
            //
            //
            //     {/*</div>*/}
            // </div>
        )
    }
}

export default Header

