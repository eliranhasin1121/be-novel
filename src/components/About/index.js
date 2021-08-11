import React from 'react';
import AboutIcon from '../../assets/About.png'
import scrollDownButton from '../../assets/scrollDownButton.png';
import PhilosophyIMG from '../../assets/Philosophy.png';
import {  StyledAboutImgSection , StyledAboutTextSection , StyledAboutText ,
     StyledScrolArrowContiner ,StyledScrolArrow , StyledPhilosophyText ,  StyledPhilosophyImg} from './StyledAbout';
import { Link } from 'react-scroll'
import UseMedia from '../../customHooks/UseMedia';
import PhilosophyContianer from '../../assets/PhilosophyContianer.png';

const About = () => {
    const {isDevice} = UseMedia();

    return (
        <div>
            <section>
                <div className="row">
                    <StyledAboutImgSection className="col-6 col-12-medium">
                        <img className="image featured" src={AboutIcon}></img>
                    </StyledAboutImgSection>
                    
                    <StyledAboutTextSection className="col-6 col-12-medium">
                        <StyledAboutText tabIndex="0" style={{ textAlign: 'left' , marginLeft : '10px'}}>
                            PI EM is an absolute return macro volatility hedge fund focused primarily on emerging market currencies and sovereign debt.
                        </StyledAboutText>
                    </StyledAboutTextSection>
                </div>
            </section>

            <Link to="contact" spy={true} smooth={true}>
                <StyledScrolArrowContiner>
                    <span aria-label={'contact us button'} tabIndex="0" >contact us</span>
                    <StyledScrolArrow className="image featured" src={scrollDownButton}/>
                </StyledScrolArrowContiner>
            </Link>
            
            <section>

                {isDevice ? 
                <div className="row grayBackground">
                    <StyledAboutImgSection className="col-6 col-12-medium">
                        <StyledPhilosophyImg className="image featured" src={PhilosophyIMG}/>
                    </StyledAboutImgSection>
                    
                    <StyledAboutTextSection style={{paddingTop : '0px'}} className="col-6 col-12-medium">
                        <StyledAboutText>
                        <h3 tabIndex="0">OUR PHILOSOPHY</h3>
                            <StyledPhilosophyText tabIndex="0">We view risk-management as a fundamental tool in structuring each trade as well as our entire portfolio rather than merely an overlay to the portfolio. A conservative approach to risk assessment and management is at the core of the fund’s activities.</StyledPhilosophyText>
                            <StyledPhilosophyText tabIndex="0">The perpetual development of screening and pricing models allows the investment team to continually take advantage of market inefficiencies.</StyledPhilosophyText>
                        </StyledAboutText>
                    </StyledAboutTextSection>
                </div>
                :
                <div className="row" style={{display : 'block' }}>
                    <StyledAboutImgSection className="col1-12" style={{paddingTop : '0px' }}>
                        <img className="image featured" src={PhilosophyContianer} tabIndex={0} 
                        aria-label={'OUR PHILOSOPHY We view risk-management as a fundamental tool in structuring each trade as well as our entire portfolio rather than merely an overlay to the portfolio. A conservative approach to risk assessment and management is at the core of the fund’s activities. The perpetual development of screening and pricing models allows the investment team to continually take advantage of market inefficiencies.'}/>
                    </StyledAboutImgSection>
                </div>
                }

            </section>
        </div>
    )
}


export default About;
