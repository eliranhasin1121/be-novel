import styled from 'styled-components';

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

export const SyledPhilosophyContainer = styled.div`
    text-align: center;
    /* height: 740px; */
`

export const SyledPhilosophyDiv = styled.div`
    position: relative;
    display: inline-block;

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