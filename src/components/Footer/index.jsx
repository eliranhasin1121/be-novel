import React from 'react';
import styled from 'styled-components'
import footerLogo from '../../assets/footer-logo.png';
import useMedia from '../../customHooks/UseMedia';
import { Link } from 'react-scroll'

export default function Footer(){

    const {isMobile} = useMedia();

    return(
        <FooterContainer>
		 <FooterContentContainer className="row">

		 {!isMobile ? ( 
             <>
          <LinkItemWrapper style={{margin: '15px 0px 0px 35px'}} className="col-2-small">
		    <Logo className="image featured"  src={footerLogo}/>
		  </LinkItemWrapper>
		  <LinkItemWrapper className="col-3">
		    <Text as={'span'}>©PI FUNDS | POWERED BY NERAFOX</Text>
		  </LinkItemWrapper>
		   <LinkItemWrapper className="col-1">
		  <Text><Link to="home" spy={true} smooth={true}>HOME</Link></Text>
		 </LinkItemWrapper>
		 <LinkItemWrapper className="col-1">
		 <Text><Link to="about" spy={true} smooth={true}>ABOUT</Link></Text>
		</LinkItemWrapper>
		<LinkItemWrapper className="col-1">
		<Text><Link to="team" spy={true} smooth={true}>TEAM</Link></Text>
	   </LinkItemWrapper>
	  <LinkItemWrapper className="col-3">
	    <Text as={'span'} >TERMS OF USE | ACCESSIBILITY | A   A   A</Text> 
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
    )
}

const FooterContentContainer = styled.div`
background-color:#000000;
padding:20px;
justify-content: space-between;
height: 180px;
`

const LinkItemWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:40px 0 0 25px;
`

const Text = styled.span`
font-size:12px;

a{
	color:#ffffff;
	text-decoration: none;
}
`

const Logo = styled.img`
width:42px;
height:67px;
margin-bottom: 0px !important
`


export const FooterContainer = styled.footer``