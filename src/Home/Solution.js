import React from 'react';
import success from '../assets/success.jpeg';
import pic1 from '../assets/solution/pic-4.png';
import pic2 from '../assets/solution/pic-5.png';
import pic3 from '../assets/solution/pic-6.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';
import styled from 'styled-components';
import Fade from "react-reveal/Fade";

const BackgroundImageContainer = styled.div`
  width: 300px;
  height: 200px;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const PrevArrowStyled = styled.div`
  background: url(${leftArrow}) no-repeat center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: -60px;
  transform: translateY(-50%);
  z-index: 10;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const NextArrowStyled = styled.div`
    background: url(${rightArrow}) no-repeat center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: -60px;
    transform: translateY(-50%);
    z-index: 10;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

function CustomPrevArrow(props) {
    const { onClick } = props;
    return <PrevArrowStyled onClick={onClick} />;
}

function CustomNextArrow(props) {
    const { onClick } = props;
    return <NextArrowStyled onClick={onClick} />;
}

class Solution extends React.Component {
    render() {

        return (
            <div className="content-advantage">

                    <div className="content_solution">
                        <Fade bottom delay={200}>
                            <div className="d-flex-desktop">
                                <Fade bottom>
                                <img src={pic1} className="pic_solution"/>
                                </Fade>
                                <Fade bottom delay={200}>
                                    <div className="content-block-solution">
                                        <h2 className="big-title-solution m-l-10">Porteur de projet ou <span className="color-orange">fondateur de startup</span></h2>
                                        <p className="text-solution-right">
                                            Présentez votre startup ou projet directement à un réseau
                                            exclusif d'investisseurs intéressés. Plus besoin de passer des mois à réseauter, nous faisons le rapprochement pour vous.
                                        </p>
                                    </div>
                                </Fade>
                            </div>

                        </Fade>
                        <Fade bottom>
                            <div className="d-flex-desktop m-t-10">
                                <div className="content-block-solution">
                                    <h2 className="big-title-solution">Optimisation du temps et <span className="color-orange">des ressources</span></h2>
                                    <p className="text-solution-left">
                                        Focalisez votre énergie sur ce qui compte vraiment: développer votre entreprise. Nous nous chargeons de l'organisation et
                                        de la mise en place de vos présentations, vous économisant ainsi un temps précieux.
                                    </p>
                                </div>
                                <Fade bottom delay={200}>
                                    <img src={pic2} className="pic_solution"/>
                                </Fade>
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className="d-flex-desktop m-t-10">
                                <img src={pic3} className="pic_solution"/>
                                <Fade bottom delay={200}>
                                    <div className="content-block-solution">
                                        <h2 className="big-title-solution m-l-10">Soutien et <span className="color-orange">accompagnement</span></h2>
                                        <p className="text-solution-right">
                                            Nous vous offrons également des formations et des ressources pour améliorer vos compétences en matière de pitch. Vous ne serez jamais seul dans votre quête de financement.
                                        </p>
                                    </div>
                                </Fade>

                            </div>
                        </Fade>

                    </div>

            </div>
        );
    }
}

export default Solution;