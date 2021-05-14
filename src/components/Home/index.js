import React from 'react';
import homeIcon from '../../assets/Home.png'
import PiNovelLOGO from '../../assets/PI-NOVEL-LOGO.png'
import { StyledPiNovelIcon } from './StyledHome';

const Home = () => {
    return (
        <div>
				<nav className="web-nav-bar" id="nav">
                    <StyledPiNovelIcon src={PiNovelLOGO}></StyledPiNovelIcon>
					<ul>
						<li><a href="left-sidebar.html">ABOUT</a></li>
						<li><a href="right-sidebar.html">TEAM</a></li>
						<li><a href="no-sidebar.html">CONTACT</a></li>
					</ul>
				</nav>


            <section>
                <a href="#" class="image featured"><img src={homeIcon} alt="" /></a>
            </section>
        </div>
    )
}

export default Home;