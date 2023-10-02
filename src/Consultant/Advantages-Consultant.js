import React from 'react';
import success from '../assets/success.jpeg';
import pic1 from '../assets/solution/pic-13.png';
import pic2 from '../assets/solution/pic-9.jpg';
import pic3 from '../assets/solution/pic-12.png';

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

class AdvantagesConsultant extends React.Component {
    render() {

        return (
            <div className="content-adv-c">

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
                                        <h2 className="big-title-solution ">Coache des entrepreneurs <span className="color-orange"><br/>lors de meetings en ligne.</span></h2>
                                        <p className="text-solution-right">
                                            Nous vous offrons la possibilité d'intervenir et d'accompagner les startups lors de leurs pitchs face à des investisseurs.
                                            Selon le choix de la startup, vous aurez l'opportunité de préparer ces talents émergents pour leurs présentations devant 5, 10 ou 15 investisseurs
                                            spécialisés dans divers secteurs d'activité.
                                            {/*Au delà du financement,*/}
                                            {/*ils t'accompagnerons dans le développement et le succès de ton projet.*/}
                                        </p>
                                    </div>
                                </Fade>
                            </div>

                        </Fade>
                        <Fade bottom>
                            <div className="d-flex-desktop m-t-10">
                                <div className="content-block-solution">
                                    <p className="mini-title-solution  green-color m-l-0">Concept</p>
                                    <h2 className="big-title-solution big-title-solution-left">Intégrez une équipe de <span className="green-color">professionnels dévoués.</span></h2>
                                    <p className="text-solution-left">
                                        En tant que conseiller chez Pitchersales, vous faites partie intégrante de notre mission. Vous bénéficierez
                                        du soutien de notre équipe et de ressources adaptées pour optimiser votre coaching. Votre expertise combinée
                                        à nos outils assurera la réussite des entrepreneurs que vous guiderez.
                                    </p>
                                </div>
                                <Fade bottom>
                                    <img src={pic2} className="pic_solution"/>
                                </Fade>
                            </div>
                        </Fade>
                       {/* <Fade bottom>
                            <div className="d-flex-desktop m-t-10">
                                <img src={pic3} className="pic_solution"/>
                                <Fade bottom>
                                    <div className="content-block-solution">
                                        <p className="mini-title-solution blue-color-o">Concept</p>
                                        <h2 className="big-title-solution m-l-10">Reçois ton financement<span className="blue-color-o"> <br/> en moins de 50 jours.</span></h2>
                                        <p className="text-solution-right">
                                            Selon l'intérêt des investisseurs pour ton projet, ils s'engagent à effectuer le processus d'étude et de financement dans un délai de 50 jours.
                                            Cet engagement vise à optimiser le démarrage et la progression de ta boîte sans délai superflu.
                                        </p>
                                    </div>
                                </Fade>

                            </div>
                        </Fade>*/}
                    </div>
                </div>

            </div>
        );
    }
}

export default AdvantagesConsultant;