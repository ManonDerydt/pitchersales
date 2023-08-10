import React from 'react';
import pic1 from './assets/pic-4.jpg'
import pic2 from './assets/pic-5.jpg'
import pic3 from './assets/img-hands.jpg'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className="big-title">
                    <span className="special-color">Allez</span> à l'essentiel<br/>Moins de <span className="special-color">pitch</span>, plus d'<span className="special-color">impact</span>
                </h1>
                <h2 className="subtitle">
                    Avec Pitchersales, présentez votre projet à un réseau mondial d'investisseurs lors de séances de pitch en ligne
                </h2>
                <a href="#concept"><button className="learn-more">Découvrir</button></a>

                <div className="pictures">
                    <img src={pic1} className="pic-1"/>
                    <img src={pic2} className="pic-2"/>
                    <img src={pic3} className="pic-1"/>
                </div>
            </div>
        )
    }
}

export default Header

