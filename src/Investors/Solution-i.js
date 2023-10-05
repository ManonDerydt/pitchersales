import React from 'react';
import success from '../assets/success.jpeg';
import pic1 from '../assets/Investors/pic-8.png';
import pic2 from '../assets/solution/pic-9.jpg';
import pic3 from '../assets/Investors/pic-14.png';

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

                <div>
                    {/*<h2 className="special-color title-offers">Une nouvelle approche <br/><span className="color-orange">de financement.</span></h2>*/}
                    <div className="m-t-5">
                        <Fade bottom>
                            <div className="d-flex-desktop m-t-10">
                                <Fade>
                                    <img src={pic1} className="pic_solution"/>
                                </Fade>
                                <Fade bottom delay={200}>
                                    <div className="content-block-solution">
                                        <p className="mini-title-solution color-orange">Concept</p>
                                        <h2 className="big-title-solution ">Découvrez les projets<span className="color-orange"><br/> lors des meetings en ligne.</span></h2>
                                        <p className="text-solution-right">
                                            Nous matchons vos enjeux d'investissement et celles des startups pour vous mettre en relation lors de sessions de
                                            pitch en ligne groupé. En fonction de vos intérêts, vous pouvez assister
                                            aux différentes sessions proposées tout au long du mois.
                                        </p>
                                    </div>
                                </Fade>
                            </div>

                        </Fade>
                        <Fade bottom>
                            <div className="d-flex-desktop m-t-10 content-solution-mobile">
                                <div className="content-block-solution">
                                    <p className="mini-title-solution  green-color m-l-0">Concept</p>
                                    <h2 className="big-title-solution big-title-solution-left">Des professionnels dédiés<span className="green-color"> guident les entrepreneurs.</span></h2>
                                    <p className="text-solution-left">
                                        Pour accompagner les porteurs de projet dans leur démarche, notre écosystème est composé de conseillers qui ont une expertise dans le domaine du
                                        financement afin de les accompagner tout au long de leurs parcours de levée de fonds.
                                    </p>
                                </div>
                                <Fade bottom>
                                    <img src={pic2} className="pic_solution"/>
                                </Fade>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="d-flex-desktop m-t-10">
                                <img src={pic3} className="pic_solution"/>
                                <Fade bottom>
                                    <div className="content-block-solution">
                                        <p className="mini-title-solution blue-color-o">Concept</p>
                                        <h2 className="big-title-solution m-l-10">Prenez votre décision<span className="blue-color-o"> <br/> endéans les 50 jours.</span></h2>
                                        <p className="text-solution-right">
                                            Selon la pertinence et l'attrait des projets présentés, nos investisseurs s'engagent à garantir un processus d'étude et d'investissement
                                            rapide, sous un délai de 50 jours. Cet engagement vise à accélérer le développement des projets et à dynamiser votre portefeuille
                                            d'investissement.
                                        </p>
                                    </div>
                                </Fade>

                            </div>
                        </Fade>
                    </div>
                </div>

            </div>
        );
    }
}

export default Solution;