import React from 'react';
import Fade from "react-reveal/Fade";
class BannerC extends React.Component {
    render() {
        return (
            <div className="content-headband-c">

                <Fade top>
                    <h2 className="text-container"> Il est temps de <span className="red-color">gagner de l'argent.</span></h2>
                </Fade>
            </div>
        )
    }
}

export default BannerC