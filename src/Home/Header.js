import React, {useState} from 'react';
import screen from "../assets/header/14.png";
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
            <div>
                <div className="container">
                    <div className="content-header-home content-header d-flex-desktop">

                        <div className="button-container-investors">
                            <div className="element-1">
                                <h2 className="big-title-investors big-title">Pitchersales, <br/><span className="color-orange">Levez 50.000 euros <br/>en moins de 50 jours.</span></h2>
                                <p className="subtitle-header">On est convaincus : quelque soit le niveau de ton projet, on peut t'aider à <span className="bold">lever des fonds sans stress.</span></p>
                            </div>
                            <div className="element-2">
                                <div className="buttons-investors">
                                    <button
                                        className={selected === 'investisseur' ? 'mix-btn selected-button' : 'mix-btn deselected-button mix-btn-deselected'}
                                        onClick={() => {
                                            window.open('https://i59ic371bmw.typeform.com/to/dWincwIG', '_blank');
                                        }}
                                    >
                                        <img src={imageG} className="icon-btn-menu" />
                                        Réserve ta place
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="content-img-header-investors">
                            <img src={screen} className="screen"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header

