import React from 'react';

import pic from './assets/pic-9.jpg'

class Buyer extends React.Component {
    render() {
        return (
            <div className="content-advantage">
                <h2 className="title-advantage">Accédez à des meeting et gagnez du temps</h2>
                <div className="content-block-adv">
                    <div className="big-image-advantage">
                        <img src={pic} className="pic-advantage"/>
                    </div>
                    <div className="content-colored-block">
                        <div className="block-ad-1">
                            <p className="text-blue">Le lorem ipsum est, en imprimerie, une suite de mots sans signification</p>
                        </div>
                        <div className="block-ad-2">
                            <p className="text-blue">Le lorem ipsum est, en imprimerie, une suite de mots sans signification</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buyer