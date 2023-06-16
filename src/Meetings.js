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
                <div>
                    <div className="content-m">
                        <img src={m1} className="m"/>
                        <img src={m2} className="m"/>
                        <img src={m3} className="m"/>
                    </div>
                </div>
                <button className="meeting-btn">Découbrir</button>
            </div>
        )
    }
}

export default Meetings