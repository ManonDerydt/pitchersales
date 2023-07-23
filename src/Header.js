import React from 'react';
import pic1 from './assets/pic-4.jpg'
import pic2 from './assets/pic-5.jpg'
import pic3 from './assets/img-hands.jpg'
import test1 from './assets/test1.jpg'
import test2 from './assets/test2.jpg'
import test3 from './assets/test3.jpeg'
import test4 from './assets/test4.jpg'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className="big-title">
                    <span className="special-color">Allez</span> à l'essentiel<br/>Moins de <span className="special-color">pitch</span>, plus de <span className="special-color">ventes</span>
                </h1>
                <h2 className="subtitle">
                    PitcherSales vous permet de présenter vos solutions à des prospects cibles lors de meeting groupés en ligne.
                </h2>
                <button className="learn-more">Découvrir</button>

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

