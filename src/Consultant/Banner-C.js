import React from 'react';
import Fade from "react-reveal/Fade";
class BannerC extends React.Component {
    render() {
        return (
            <div className="content-headband">

                <Fade top>
                    <h2 className="text-container"> Il est temps d'être <span className="red-color">un game changer.</span></h2>
                </Fade>
            </div>
        )
    }
}

export default BannerC