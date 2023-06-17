import React from 'react';

import pic from './assets/pic-9.jpg'

class Buyer extends React.Component {
    render() {
        return (
            <div className="content-advantage">
                <h2 className="title-solution">Nos solutions</h2>
                <h2 className="big-title-solution">PitcherSales, c'est la solution sur mesure aux sales désireux de vendre rapidement et proprement</h2>
                <div className="content-block-adv">
                    <div className="block-solution">
                        <h3 className="title-block-solution">Title</h3>
                        <p className="small-text-block-solution">Ce sous-titre parle d'une solution.</p>
                    </div>
                    <div className="block-solution">
                        <h3 className="title-block-solution">Title</h3>
                        <p className="small-text-block-solution">Ce sous-titre parle d'une solution.</p>
                    </div>
                    <div className="block-solution">
                        <h3 className="title-block-solution">Title</h3>
                        <p className="small-text-block-solution">Ce sous-titre parle d'une solution.</p>
                    </div>
                    {/*<div className="big-image-advantage">*/}
                    {/*    <img src={pic} className="pic-advantage"/>*/}
                    {/*</div>*/}
                    {/*<div className="content-colored-block">*/}
                    {/*    <div className="block-ad-1">*/}
                    {/*        <p className="text-blue">Le lorem ipsum est, en imprimerie, une suite de mots sans signification</p>*/}
                    {/*    </div>*/}
                    {/*    <div className="block-ad-2">*/}
                    {/*        <p className="text-blue">Le lorem ipsum est, en imprimerie, une suite de mots sans signification</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default Buyer