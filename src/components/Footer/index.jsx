import React from 'react';
import styled from 'styled-components'
import footerLogo from '../../assets/footer-logo.png';
import useMedia from '../../customHooks/UseMedia';
import { useLocation } from 'react-router';
import { Link } from 'react-scroll'

export default function Footer({history}){

    const {isMobile} = useMedia();
	const {pathname} = useLocation();
	const isHE = pathname.includes('opportunities');

    return(
		<>
        <FooterContainer>
		 <FooterContentContainer>

		 {!isMobile ? ( 
             <>
		<InternalRow  className="col-6">
          <LinkItemWrapper style={{margin: '20px 0px 0px 0px'}} className="col-2-small">
		    <Logo className="image featured"   src={footerLogo}/>
		  </LinkItemWrapper>
		  <LinkItemWrapper className="col-3">
		    <Text as={'span'}>{'©PI FUNDS | POWERED BY NERAFOX'}</Text>
		  </LinkItemWrapper>
		  </InternalRow>
		  <InternalRow className="col-6">
		   <LinkItemWrapper className="col-1">
		   <Link to="about" spy={true} smooth={true}> <Text>{'ABOUT'}</Text> </Link>
		 </LinkItemWrapper>
		 <LinkItemWrapper className="col-1">
		 <Link to="team" spy={true} smooth={true}> <Text>{'TEAM'}</Text> </Link> 
		</LinkItemWrapper>
		<LinkItemWrapper className="col-1">
		<Link to="contact" spy={true} smooth={true}> <Text>{'CONTACT'}</Text> </Link>
	   </LinkItemWrapper>
	   </InternalRow>
	  <LinkItemWrapper className="col-3">
	    <Text as={'span'} >{'TERMS OF USE | ACCESSIBILITY | A   A   A'}</Text> 
	  </LinkItemWrapper>
      </>
      ) : 
      (
    <>
    <LinkItemWrapper  className="col-2">
    <Logo className="image featured" src={footerLogo}/>
    </LinkItemWrapper>
    <LinkItemWrapper  className="col-10">
        <Text as={'span'}>©PI FUNDS | POWERED BY NERAFOX</Text>
    </LinkItemWrapper>
    </>
      )
    
    }
    </FooterContentContainer>
	  </FooterContainer>
	  </>

    )
}

const FooterContentContainer = styled.div`
background-color:#000000;
padding:20px;
display:flex;
justify-content:space-between;
`

const InternalRow = styled.div`
display:flex;
`
const LinkItemWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:15px 0 0 25px;
height:20px;
`

const Text = styled.span`
	font-size:12px;
	color:#ffffff;
`

const Logo = styled.img`
width:42px;
height:67px;
`

const FooterText = styled.p`
	direction: rtl;
    background: rgb(216, 216, 216);
    padding: 25px;
	margin-bottom : 0px;
	color:white;
`


export const FooterContainer = styled.footer``