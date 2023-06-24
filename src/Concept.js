import React from 'react';
import searchbar from '../src/assets/searchbar.png'
import searchbar2 from '../src/assets/searchbar2.png'
import meeting from '../src/assets/meeting.png'
import m1 from '../src/assets/m1.jpg'
import m2 from '../src/assets/m2.jpg'
import m3 from '../src/assets/m3.jpg'
import m4 from '../src/assets/m4.jpg'
import drow from '../src/assets/drow.png'
class Concept extends React.Component {
    render() {
        return (
            <div>
                <img src={drow} className="drow"/>
                <div  className="section-concept">
                    <div className="d-flex justify-content-between w-100 content-box-meeting">
                        <div className="block-text-meeting">
                            <div>
                                <h3 className="title-concept ">Nom d'un des concept</h3>
                                <p className="text-concept">
                                    Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                                    utilisée à titre provisoire pour calibrerLe lorem ipsum est, en imprimerie, une suite de mots sans signification
                                    utilisée à titre provisoire pour calibrerLe lorem ipsum est, en imprimerie, une suite de mots sans signification
                                    utilisée à titre provisoire pour calibrer
                                </p>
                            </div>
                            <button className="btn-concept">Découvrir</button>
                        </div>
                        <div className="block-img-meeting">
                            <img src={searchbar2} className="searchbar"/>
                            <div className="block-m">
                                <div className="d-flex justify-content-between">
                                    <div className="block-img-m">
                                        <img src={m1} className="m ml1"/>
                                        <p className="tag-meeting"> Julie, Total</p>
                                    </div>
                                    <div className="block-img-m">
                                        <img src={m3} className="m"/>
                                        <p className="tag-meeting"> Julie, Total</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between second-m">
                                    <div className="block-img-m">
                                        <img src={m2} className="m ml1"/>
                                        <p className="tag-meeting"> Julie, Total</p>
                                    </div>
                                    <div className="block-img-m">
                                        <img src={m4} className="m"/>
                                        <p className="tag-meeting"> Julie, Total</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}

export default Concept