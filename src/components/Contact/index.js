import React from 'react';
import Banner from '../Banner';
import ContactRight from '../../assets/ContactRight.png';
import { StyledContactForm , StyledFormHeader , StyledForm  } from './StyledContact';


const Contact = () =>{
    return (
        <div>
            <Banner/>
            <section>
                <div className="row">
                    <StyledContactForm className="col-6 col-12-medium">
                        <StyledFormHeader> CONTACT US</StyledFormHeader>
                        <StyledForm>
                            <input 
                                type="text" 
                                name="YOUR NAME" 
                                placeholder="YOUR NAME" />
                            
                            <input 
                                type="email" 
                                name="EMAIL" 
                                placeholder="EMAIL" />
                            
                            <input 
                                type="text" 
                                name="CELLPHONE" 
                                placeholder="CELLPHONE" />
                            
                            <input 
                            type="text" 
                                name="YOUR MESSAGE" 
                                placeholder="YOUR MESSAGE" />
                        </StyledForm>
                    </StyledContactForm>
                    
                    <div className="col-6 col-12-medium">
                    <img className="image featured" src={ContactRight}></img>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;