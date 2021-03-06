import Styled, { css } from 'styled-components';

export const StyledFormHeader = Styled.h2`
    text-align: center;
`

export const StyledContactForm = Styled.div`
        ${({isMobile}) => isMobile && css`
        margin:auto;
        `}
    background-color: #D8D8D8;
    display: flex;
    @media (max-width: 980px) {
       margin-top: 40px;
    }
    @media (max-width: 812px) {
       margin-top: 100px;
    }
    @media (max-width: 737px) {
       margin-top: 20px;
    }
    @media (max-width: 669px) {
       margin-top: 57px;
    }
    @media (max-width: 511px) {
        margin-top: 60px;
    }
    @media (max-width: 466px) {
        margin-top: 95px;
    }
    @media (max-width: 438px) {
        margin-top: 135px;
    }
    @media (max-width: 350px) {
        margin-top: 95px;
    }
`

export const StyledForm = Styled.form`
    width: 70%;
    margin: auto;

    input{
        background-color: transparent;
        border:none;
        border-bottom:1px solid black;
    }
`

export const Input = Styled.input`
        background-color: transparent;
        border:none;
        border-bottom:1px solid black;
        margin-bottom:10px;
`

export const ContactTextWrapper = Styled.div`
position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  background-color:white;
  opacity: 0.1;
    height: 90%;
    width: 138%;
`

export const ContactContainer = Styled.div`
    padding: 0px;
    background: rgba(0,0,0,0.49);

`

export const StyledContactImage = Styled.img`
    margin: 0px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    /* width: auto !important; */
    /* max-height: ${props => props.isMobile && '400px'}; */
`

export const ButtonWrapper = Styled.div`
    padding-top:20px;
    display: flex;
    justify-content: center;
    margin-bottom : ${props=>props.isDevice ? '25px' : '0px'};
`

export const Button = Styled.button`
    background:transparent;
    width:144px;
    height:46px;
    border:1px solid #979797;
    color:black;
    font-size:18px;
    border-radius:8px;
`
