import React from 'react';
import AboutIcon from '../../assets/About.png'
import PhilosophyIcon from '../../assets/Philosophy.png';
import { StyledAbout,  StyledAboutImgSection , 
    StyledAboutTextSection , StyledAboutText , SyledPhilosophy } from './StyledAbout';

const About = () => {
    return (
        <div>
            <section>
                <StyledAbout className="row">
                    <StyledAboutImgSection className="col-6 col-12-medium">
                        <img class="image featured" src={AboutIcon}></img>
                    </StyledAboutImgSection>
                    
                    <StyledAboutTextSection className="col-6 col-12-medium">
                        <StyledAboutText>
                            PI EM is an absolute return macro volatility hedge fund focused primarily on emerging market currencies and sovereign debt.
                        </StyledAboutText>
                    </StyledAboutTextSection>
                </StyledAbout>
            </section>

            <section>
                <StyledAbout className="row">
                <div >
                    <img class="image featured" src={PhilosophyIcon}></img>
                    <SyledPhilosophy>
                        <h3>OUR PHILOSOPHY</h3>
                        <span>We view risk-management as a fundamental tool in structuring each trade as well as our entire portfolio rather than merely an overlay to the portfolio. A conservative approach to risk assessment and management is at the core of the fund’s activities.</span>
                        <span>The perpetual development of screening and pricing models allows the investment team to continually take advantage of market inefficiencies.</span>
                    </SyledPhilosophy>
                </div>
                </StyledAbout>
            </section>
        </div>
    )
}


export default About;
