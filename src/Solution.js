import React from 'react';
import icon1 from "./assets/icon-1.png"
import icon2 from "./assets/icon-2.png"
import icon3 from "./assets/icon-3.png"
import icon4 from "./assets/icon-4.png"
import pic from './assets/pic-9.jpg'

class Solution extends React.Component {
    render() {
        return (
            <div className="content-advantage">
                <h2 className="title-solution">Nos solutions</h2>
                <div className="content-block-adv">
                    <div className="block-solution-1">
                        <div className="content-text-solution">
                            <h3 className="title-block-solution">Title</h3>
                            <p className="small-text-block-solution">Ce sous-titre parle d'une solution.Ce sous-titre parle d'une solution.Ce sous-titre parle d'une solution.</p>
                        </div>
                    </div>
                    <div className="block-solution-2">
                        <div className="content-text-solution">
                            <h3 className="title-block-solution">Title</h3>
                            <p className="small-text-block-solution">Ce sous-titre parle d'une solution.Ce sous-titre parle d'une solution.Ce sous-titre parle d'une solution.</p>
                        </div>
                    </div>
                    <div>
                        <div className="block-solution-3">
                            <div className="content-text-solution">
                                <h3 className="title-block-solution">Title</h3>
                                <p className="small-text-block-solution">Ce sous-titre parle d'une solution.Ce sous-titre parle d'une solution.Ce sous-titre parle d'une solution.</p>
                            </div>
                        </div>
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

export default Solution