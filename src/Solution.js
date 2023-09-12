import React from 'react';
import success from '././assets/success.jpeg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leftArrow from './assets/left-arrow.png';
import rightArrow from './assets/right-arrow.png';
import styled from 'styled-components';

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
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />
        };

        return (
            <div className="content-advantage">
                <div className="d-flex-desktop">
                    <img src={success} className="success" alt="success-image"/>
                    <div className="carousel-container">
                        <h2 className="big-title-solution">Avec Pitchersales, levez 50 000 euros en moins de 50 jours.</h2>
                        <Slider {...settings}>
                            <div>
                                <div className="content-block-adv">
                                    <div className="d-flex-desktop">
                                        <p>1.</p><p className="title-solution">Vous êtes porteur de projet</p>
                                    </div>
                                    <p className="text-solution">
                                        Que vous soyez une startup en plein essor, un groupe de musique émergent ou un styliste prêt à briller,
                                        Pitchersales est votre tremplin vers des investisseurs dédiés. Faites-vous remarquer,
                                        financez votre vision.
                                    </p>

                                </div>
                            </div>
                            <div>
                                <div className="content-block-adv">
                                    <div className="d-flex-desktop">
                                        <p>2.</p><p className="title-solution">Encadrement</p>
                                    </div>
                                    <p className="text-solution">
                                        L'intérêt des investisseurs est notre priorité. Chez Pitchersales, nous nous engageons à vous offrir
                                        une voie accélérée vers un investissement dès qu'un intérêt mutuel est établi. Avec nous,
                                        votre projet ne reste pas juste une idée, il prend son envol.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="content-block-adv">
                                    <div className="d-flex-desktop">
                                        <p>3.</p><p className="title-solution">Investissement</p>
                                    </div>
                                    <p className="text-solution">
                                        Chez Pitchersales, chaque projet compte. Notre dévouement ne s'arrête pas à la sélection : nous
                                        encadrons chaque initiative, mettant tout en œuvre pour transformer votre vision en une réalité financée et soutenue.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Solution;