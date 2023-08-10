import React from 'react';
import logo from '../src/assets/Pitchersales-black.jpg'
class Footer extends React.Component {
    render() {
        return (
            <div className="section-footer">
                <footer id="footer" className="footer">
                   <h2 className="join-footer">Vous souhaitez rejoindre notre équipe ?</h2>
                    <div className="d-flex text-center">
                        <button className="btn-footer">
                            <a href="mailto:derydtmanon@gmail.com">Contactez-nous <span className="emoji-item-footer">&#128233;</span></a>
                        </button>
                    </div>

                    <div className="block-footer">
                        <img src={logo} className="black-logo" alt="logo"/>
                        <div className="d-flex">
                            <h2 className="pitchersales">©2023 | Pitchersales</h2>
                            <h2 className="pitchersales">Rejoignez-nous</h2>
                        </div>
                    </div>

                </footer>
            </div>
        )
    }
}

export default Footer