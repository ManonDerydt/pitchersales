import React from 'react';
import check from "../src/assets/check.png"

class Advantages extends React.Component {
    render() {
        return (
            <div>
                <div className="content-advantages">
                    <h2 className="title-advantages">Un accompagnement personnalisé</h2>

                    <div className="block-advantage">
                        <div className="d-flex">
                            <img src={check} className="check"/>
                            <p>Testez votre éligibilité en remplissant le formulaire (3 minutes)</p>
                        </div>
                        <div className="d-flex">
                            <img src={check} className="check"/>
                            <p>Testez votre éligibilité en remplissant le formulaire (3 minutes)</p>
                        </div>
                        <div className="d-flex">
                            <img src={check} className="check"/>
                            <p>Testez votre éligibilité en remplissant le formulaire (3 minutes)</p>
                        </div>
                    </div>

                    <button className="button-advantage">Découvrir</button>

                </div>

            </div>
        )
    }
}

export default Advantages
