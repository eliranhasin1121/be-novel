import styled from 'styled-components';


export const StyledSection = styled.section`
    margin-bottom: 0px;
`

export const StyledAbout = styled.div`
    height: ${(props)=> props.isDevice ? 'auto' : '740px'};
`


export const StyledAboutImgSection = styled.div`
    display: flex;
    align-items: center;
`

export const StyledAboutTextSection = styled.div`
    display: flex;
    align-items: center;
`


export const StyledAboutText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    color: #000000;
    line-height: 1;
    text-align: center;
`


export const StyledScrolArrowContiner = styled.div`
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        color: #6b7770;
        text-decoration: none;
    }

`

export const StyledScrolArrow = styled.img`
    height: 60px;
    width: 60px !important;
    z-index: 1;
`

export const SyledPhilosophyContainer = styled.div`
    text-align: center;
`

export const SyledPhilosophyDiv = styled.div`
    position: relative;
    display: inline-block;
    padding-top: 0px;
    .caption {
    width: 40%;
    position: absolute;
    background: rgba(0,0,0,0.65);
    top: 50%;
    left: 75%;
    transform: translate( -50%, -50% );
    text-align: center;
    color: white;
    font-weight: bold;

    h2{
        color: white;
        position: relative;
        padding: 0 1.25em 0 1.25em;
    }
}
`