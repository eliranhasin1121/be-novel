import React from 'react';
import Banner from '../Banner';
import ContactRight from '../../assets/ContactRight.png';
import { StyledContactForm , StyledFormHeader , StyledForm, Input,ContactContainer,Button,ButtonWrapper, StyledContactImage  } from './StyledContact';
import UseMedia from '../../customHooks/UseMedia';


const Contact = () =>{

    const {isMobile , isDevice} = UseMedia();
    return (
        <div>
            <Banner/>
            <section>
                <div className="row" >
                    <StyledContactForm isMobile={isMobile} className="col-6 col-12-medium">
                        <StyledForm>
                        <StyledFormHeader tabIndex="0" style={{padding:0}}>{'CONTACT US'}</StyledFormHeader>
                            <Input
                                style={{border:'none',borderBottom:'1px solid black',background:'transparent',borderRadius:0}}
                                type="text" 
                                name="YOUR NAME" 
                                placeholder={"YOUR NAME"} />
                            
                            <Input 
                                style={{border:'none',borderBottom:'1px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="EMAIL" 
                                placeholder={"EMAIL"} />
                            
                            <Input
                                style={{border:'none',borderBottom:'1px solid black',background:'transparent',borderRadius:0}} 
                                type="text" 
                                name="CELLPHONE" 
                                placeholder={"CELLPHONE"} />
                            
                            <Input 
                            style={{border:'none',borderBottom:'1px solid black',background:'transparent',borderRadius:0}}
                            type="text" 
                            name="YOUR MESSAGE" 
                            placeholder={"YOUR MESSAGE"} />
                            <ButtonWrapper isDevice={isDevice}>
                                <Button type="submit">{'SEND'}</Button>                        
                            </ButtonWrapper>
                        </StyledForm>
                    </StyledContactForm>
                    <ContactContainer className="col-6 col-12-medium">
                        <StyledContactImage isMobile={isMobile} className="image featured" src={ContactRight}/>
                    </ContactContainer>
       
                </div>
            </section>
        </div>
    )
}

export default Contact;