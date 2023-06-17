import React from 'react';
import m1 from "./assets/m1.jpg"
import m2 from "./assets/m2.jpg"
import m3 from "./assets/m3.jpg"
class Meetings extends React.Component {
    render() {
        return (
            <div className="section-meeting">
                <h2 className="title-meetings">Nos futurs meetings</h2>
                <p className="subtitle-meeting">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page</p>
                <div className="tags-meeting">
                    <div className="tag">Immobilier</div>
                    <div className="tag">Technologie</div>
                    <div className="tag">Design</div>
                    <div className="tag">Ecologie</div>
                </div>
                <div>
                    <div className="content-m">
                        <div className="block-m">
                            <img src={m1} className="m"/>
                            <h3></h3>
                        </div>
                        <div className="block-m">
                            <img src={m2} className="m"/>
                        </div>
                        <div className="block-m">
                            <img src={m3} className="m"/>
                        </div>

                    </div>
                </div>
                <button className="meeting-btn">Découbrir</button>
            </div>
        )
    }
}

export default Meetings