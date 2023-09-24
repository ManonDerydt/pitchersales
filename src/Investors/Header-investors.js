import React from 'react';
import screen from '../assets/screen.png'

class HeaderInvestors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null,
        };
    }

    selectOption(option) {
        this.setState({ selected: option });
    }
    render() {
        const { selected } = this.state;

        return (
            <div className="content-header-Investors d-flex-desktop">
                <div>
                    <div className="button-container-investors">
                        <h2 className="big-title-investors">Investissez dans des startups qui vous ressemble</h2>
                        <div className="buttons-investors">
                            <button className={selected === 'investisseur' ? 'mix-btn selected-button' : 'mix-btn deselected-button mix-btn-deselected'} onClick={() => this.selectOption('investisseur')}>Investisseur</button>
                            <button className={selected === 'startup' ? 'mix-btn selected-button' : 'mix-btn deselected-button mix-btn-deselected'} onClick={() => this.selectOption('startup')}>Startups</button>
                            {selected === 'investisseur' && <div>Contenu pour Investisseur</div>}
                            {selected === 'startup' && <div>Contenu pour Startups</div>}
                        </div>

                    </div>
                </div>

                <img src={screen} className="screen"/>
            </div>
        )
    }
}

export default HeaderInvestors
