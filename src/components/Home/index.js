import React from 'react';
import homeIcon from '../../assets/Home.png'
import PiNovelLOGO from '../../assets/PI-NOVEL-LOGO.png'
import { StyledPiNovelIcon } from './StyledHome';
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div>
				<nav className="web-nav-bar" id="nav">
                    <StyledPiNovelIcon tabIndex="0" aria-label='Be Novel' src={PiNovelLOGO}></StyledPiNovelIcon>
					<ul>
                        <li aria-label='About Section' tabIndex="0"><Link to="about" spy={true} smooth={true}>ABOUT</Link></li>
                        <li aria-label='Team Section' tabIndex="0"><Link to="team" spy={true} smooth={true}>TEAM</Link></li>
                        <li aria-label='Contact Section' tabIndex="0"><Link to="contact" spy={true} smooth={true}>CONTACT</Link></li>
					</ul>
				</nav>

            <section>
                <a href="#" className="image featured"><img src={homeIcon} alt="" /></a>
            </section>
        </div>
    )
}

export default Home;