import React, { useState , useRef } from 'react';
import AboutIcon from '../../assets/About.png'
import scrollDownButton from '../../assets/scrollDownButton.png';
import PhilosophyIMG from '../../assets/Philosophy.png';
import { StyledSection , StyledAbout,  StyledAboutImgSection , StyledAboutTextSection , StyledAboutText ,
    SyledPhilosophyContainer ,  SyledPhilosophyDiv , StyledScrolArrowContiner ,StyledScrolArrow } from './StyledAbout';
import useMedia from '../../customHooks/UseMedia';

const About = () => {
    const imageRef = useRef(null);
    const [height,setHight] = useState(0);
    const {isMobile , isDevice} = useMedia();

    return (
        <div>
            <section>
                <StyledAbout isDevice={isDevice} className="row">
                    <StyledAboutImgSection className="col-6 col-12-medium">
                        <img className="image featured" src={AboutIcon}></img>
                    </StyledAboutImgSection>
                    
                    <StyledAboutTextSection className="col-6 col-12-medium">
                        <StyledAboutText>
                            PI EM is an absolute return macro volatility hedge fund focused primarily on emerging market currencies and sovereign debt.
                        </StyledAboutText>
                    </StyledAboutTextSection>
                </StyledAbout>
            </section>
            <StyledScrolArrowContiner>
                <span>contact us</span>
                <StyledScrolArrow className="image featured" src={scrollDownButton}/>
            </StyledScrolArrowContiner>
            <StyledSection>
                <SyledPhilosophyContainer className="row">
                <SyledPhilosophyDiv imageHeight={height}>
                    <img ref={imageRef} className="image featured" src={PhilosophyIMG}></img>
                    {/* <div className="col-12 col-12-medium caption">
                        <h2>OUR PHILOSOPHY</h2>
                        <p>
                            <span>We view risk-management as a fundamental tool in structuring each trade as well as our entire portfolio rather than merely an overlay to the portfolio. A conservative approach to risk assessment and management is at the core of the fund’s activities.</span>
                            <span>The perpetual development of screening and pricing models allows the investment team to continually take advantage of market inefficiencies.</span>
                        </p>
                    </div> */}
                </SyledPhilosophyDiv>
                </SyledPhilosophyContainer>
            </StyledSection>
        </div>
    )
}


export default About;
