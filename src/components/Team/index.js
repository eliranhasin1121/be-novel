import React from 'react';
import BenLogo from '../../assets/Ben.png'
import NickiLogo from '../../assets/Nicki.png'
import TalieLogo from '../../assets/Talie.png'
import { StyledOutTeamText , StyledOutTeamImage , StyledTeamMemberContainer , StyledTextContainer} from './StyledTeam';
import useMedia from '../../customHooks/UseMedia';
const Team = () =>{
    const {isMobile , isDevice} = useMedia();

    console.log('isTablet' , isDevice)
    return (
        <div>
            <section>
                <div className="row">
                    <StyledTeamMemberContainer className="col-6 col-6-medium">
                    <StyledOutTeamImage isMobile={isMobile} className="image featured" src={NickiLogo}></StyledOutTeamImage>
                    {isDevice &&  
                        <StyledOutTeamText isDevice={isDevice}>
                            <span>NICKI NIKITENKO</span>
                            <span>HEAD OF TRADING</span>   
                        </StyledOutTeamText>                    
                    }
                    </StyledTeamMemberContainer>
                    <StyledTextContainer className="col-6 col-12-medium">
                        <StyledOutTeamText isDevice={isDevice}>
                        {!isDevice && 
                            <React.Fragment>
                                <span>NICKI NIKITENKO</span>
                                <span>HEAD OF TRADING</span>
                            </React.Fragment>
                        }
                            <span>Mr. Kaye has over 29 years of extensive experience in trading and managing proprietary FX and bond derivative books in the United States, Europe and Emerging Markets. In 1999, Mr. Kaye co-founded Pi Financial Instruments, one of the largest proprietary derivatives houses in Israel. Since that time he has been in charge of the group's risk management and proprietary trading of global bonds and FX derivatives book. In March 2006, Mr. Kaye launched Pi Fund specializing in trading hedged global sovereign fixed income and FX instruments.</span>
                        </StyledOutTeamText>
                    </StyledTextContainer>
                </div>
            </section>

            <section>
                <div className="row">
                        {!isDevice && 
                        <StyledTextContainer className="col-6 col-12-medium">
                            <StyledOutTeamText isDevice={isDevice}>
                                <React.Fragment>
                                    <span>BEN MOSCONA</span>
                                    <span>HEAD OF RESEARCH</span>
                                </React.Fragment>
                                <span>Dolev started his career in 2013 as an Equity derivatives analyst at Brevan Howard, he then spent 4 years at JPMorgan in London as an FX options market maker (G10 & EM). He holds a Master's degree in Financial Markets from University of Paris Dauphine. Dolev Joined Pi in mid-2018.</span>
                            </StyledOutTeamText>
                        </StyledTextContainer>
                        }
                    <StyledTeamMemberContainer className="col-6 col-6-medium">
                    <StyledOutTeamImage isMobile={isMobile} className="image featured" src={BenLogo}></StyledOutTeamImage>
                    {isDevice &&  
                        <StyledOutTeamText isDevice={isDevice}>
                            <span>BEN MOSCONA</span>
                            <span>HEAD OF RESEARCH</span>   
                        </StyledOutTeamText>                    
                    }
                    </StyledTeamMemberContainer>

                    {isDevice && 
                        <StyledTextContainer className="col-6 col-12-medium">
                            <StyledOutTeamText isDevice={isDevice}>
                                <span>Dolev started his career in 2013 as an Equity derivatives analyst at Brevan Howard, he then spent 4 years at JPMorgan in London as an FX options market maker (G10 & EM). He holds a Master's degree in Financial Markets from University of Paris Dauphine. Dolev Joined Pi in mid-2018.</span>
                            </StyledOutTeamText>
                        </StyledTextContainer>
                        }

                </div>
            </section>

            <section>
                <div className="row">
                    <StyledTeamMemberContainer className="col-6 col-6-medium">
                    <StyledOutTeamImage isMobile={isMobile} className="image featured" src={TalieLogo}></StyledOutTeamImage>
                    {isDevice &&  
                        <StyledOutTeamText isDevice={isDevice}>
                            <span>TALIE ARKIN</span>
                            <span>INVESTOR RELATIONS</span>   
                        </StyledOutTeamText>                    
                    }
                    </StyledTeamMemberContainer>
                    <StyledTextContainer className="col-6 col-12-medium">
                        <StyledOutTeamText isDevice={isDevice}>
                        {!isDevice && 
                            <React.Fragment>
                                <span>TALIE ARKIN</span>
                                <span>INVESTOR RELATIONS</span>
                            </React.Fragment>
                        }
                            <span>Talie joined Pi mid-2016, Ms. Arkin has over ten years' experience in marketing communications and investor relations, primarily in the real estate and energy sectors. Prior to joining Pi, Ms. Arkin took an active role in management and oversight of large scale development projects in the U.S., ranging from residential to retail to hotel condo complexes. Arkin acquired a Bachelor of laws degree from the College of Management in Israel and holds a Master's degree in real estate from Columbia University.</span>
                        </StyledOutTeamText>
                    </StyledTextContainer>
                </div>
            </section>

        </div>
    )
}

export default Team;