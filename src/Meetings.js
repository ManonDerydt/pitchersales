import React from 'react';
import m1 from "./assets/m1.jpg"
import m2 from "./assets/m2.jpg"
import m3 from "./assets/m3.jpg"
import arrow from "./assets/arrow.png"
class Meetings extends React.Component {
    render() {
        return (
            <div className="section-meeting">
                <div className="d-flex justify-content-between">
                    <h2 className="title-meetings">Nos futurs meetings</h2>
                    <h2 className="title-meeting-end">Découvrir tous nos meeting</h2>
                </div>

                <div className="tags-meeting">
                    <div className="tag">Immobilier</div>
                    <div className="tag">Technologie</div>
                    <div className="tag">Design</div>
                    <div className="tag">Ecologie</div>
                </div>
                <div>
                    <div>
                        <div className="content-m">
                            <div className="block-card">
                                <img src={m1} className="meeting-img"/>
                                <p className="meeting-date">29 JUIN 19:00</p>
                                <h3 className="title-meeting">Immobilier</h3>
                                <p className="text-meeting">Le lorem ipsum est, en imprimerie, une suite de mots sans
                                    signification utilisée à titre provisoire pour calibrer
                                </p>
                            </div>
                            <div className="block-card">
                                <img src={m2} className="meeting-img"/>
                                <p className="meeting-date">29 JUIN 19:00</p>
                                <h3 className="title-meeting">Immobilier</h3>
                                <p className="text-meeting">Le lorem ipsum est, en imprimerie, une suite de mots sans
                                    signification utilisée à titre provisoire pour calibrer
                                </p>
                            </div>
                            <div className="block-card">
                                <img src={m3} className="meeting-img"/>
                                <p className="meeting-date">29 JUIN 19:00</p>
                                <h3 className="title-meeting">Immobilier</h3>
                                <p className="text-meeting">Le lorem ipsum est, en imprimerie, une suite de mots sans
                                    signification utilisée à titre provisoire pour calibrer
                                </p>
                            </div>
                            <div className="block-card">
                                <img src={m3} className="meeting-img"/>
                                <p className="meeting-date">29 JUIN 19:00</p>
                                <h3 className="title-meeting">Immobilier</h3>
                                <p className="text-meeting">Le lorem ipsum est, en imprimerie, une suite de mots sans
                                    signification utilisée à titre provisoire pour calibrer
                                </p>
                            </div>
                        </div>
                        <div className="content-arrow">
                            {/*<button className="btn-arrow">*/}
                            {/*    <img src={arrow} className="arrow"/>*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meetings