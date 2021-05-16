import React from 'react';
import PiNovelLogo from '../../assets/Logo.png';
import { StyledPiLogo } from './StyledBanner';

const Banner = () =>{
    return (
        <section id="banner">
        <div class="content">
            <div className="col-6 col-12-medium">
                <h2>For more financial instruments powered by PI-FUNDS</h2>
                <StyledPiLogo className="image featured" src={PiNovelLogo}></StyledPiLogo>
            </div>
            <a href="#main" class="button scrolly">CLICK HERE</a>
        </div>
    </section>
    )
}

export default Banner;