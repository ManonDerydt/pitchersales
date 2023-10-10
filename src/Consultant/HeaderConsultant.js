import React, {useState} from 'react';
import bg from '../assets/header/bg-header.png'
import pic1 from '../assets/header/header-1.png'
import pic2 from '../assets/header/header-2.png'
import pic3 from '../assets/header/header-3.png'
import pic4 from '../assets/header/header-4.png'
import speak from '../assets/header/speak.png'
import Investors from "../Investors/Investors";
import screen from "../assets/header/pic-header-4.png";
import bonhomme from "../assets/one-b.png"
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


        return (
            <div className="content-header-Consultant content-header d-flex-desktop">
                <div>
                    <div className="button-container-investors">
                        <h2 className="big-title-investors big-title">Pitchersales, <br/>
                            <span className="red-color">Multipliez vos revenus en conseillant sereinement</span>
                        </h2>
                        <p className="subtitle-header">On est convaincus, quelque soit votre expertise en levée de fonds : coachez des <span className="bold">projets à forte valeur ajoutée.</span></p>
                        <div className="buttons-investors">
                            <button className={selected === 'investisseur' ? 'mix-btn selected-button-c' : 'mix-btn deselected-button mix-btn-deselected' } onClick={() => this.selectOption('investisseur')}>
                                <img src={bonhomme} className="icon-btn-menu-c"/>
                                Demander une démo
                            </button>
                            {/*{selected === 'investisseur' && <div>Contenu pour Investisseur</div>}*/}
                            {/*{selected === 'startup' && <div>Contenu pour Startups</div>}*/}
                        </div>

                    </div>
                </div>
                <div className="content-img-header">
                    <img src={screen} className="screen"/>
                </div>
            </div>
        )
    }
}

export default Header

