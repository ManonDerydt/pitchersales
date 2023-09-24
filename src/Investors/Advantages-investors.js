import React from 'react';
import pic1 from '../assets/Investors/pic-1.png'
import fusée from '../assets/Investors/fusée.png'
import r1 from '../assets/Investors/reseau1.png'
import r2 from '../assets/Investors/reaseau2.png'
import r3 from '../assets/Investors/r3.png'
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Background = styled.div`
  background-image: url(${pic1});
  background-size: cover;
  background-position: center;
  width: 34em;
  height: 40em;
  margin: 0 auto;
  border-radius: 1.875rem;
        `;
class AdvantagesInvestors extends React.Component {
    render() {
        return (
            <div className="">
                <Fade bottom>
                    <div className="d-flex-desktop content-block-i">

                        <div className="block-i block-i-1">
                            <Background>
                                <h3 className="text-i-1">Accès à des startups exclusives triées sur le volet selon vos besoin.</h3>
                            </Background>
                        </div>
                        <Fade bottom delay={200}>
                            <div className="block-i block-i-2">
                                <h3 className="text-i-1"><span className="color-orange">Ne perdez pas de temps.</span><span className="color-black"> Programmez vos mettings selon vos besoins.</span></h3>
                                <img src={fusée} className="img-i"/>
                            </div>
                        </Fade>
                    </div>
                </Fade>

                <br/>
                <Fade bottom>
                    <div className="d-flex-desktop content-block-i">
                        <div className="block-i block-i-3">
                            {/*<img src={r1} className="r1"/>*/}
                            <h3 className="text-i-1">Accès à des startups exclusives triées sur le volet selon vos besoin.</h3>
                            <img src={r3} className="r3"/>
                        </div>
                        <Fade delay={200} bottom>
                            <div className="block-i block-i-4"></div>
                        </Fade>
                    </div>
                </Fade>

                <br/>
                <Fade bottom>
                    <div className="d-flex-desktop content-block-i">
                        <div className="block-i block-i-5"></div>
                        <Fade bottom delay={200}>
                            <div className="block-i block-i-6"></div>
                        </Fade>
                    </div>
                </Fade>

            </div>
        )
    }
}

export default AdvantagesInvestors