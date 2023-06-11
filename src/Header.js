import React from 'react';
import pic1 from './assets/pic-4.jpg'
import pic2 from './assets/pic-5.jpg'
import pic3 from './assets/pic-8.jpg'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className="big-title">
                    <span className="special-color">Enjoy</span> your favorite Music <br/>at the best <span className="special-color">concert</span>
                </h1>
                {/*<h2 className="subtitle">*/}
                {/*    Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire*/}
                {/*</h2>*/}
                <button className="button-header">Inscription</button>

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

