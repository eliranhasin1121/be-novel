import React , {useState} from 'react';
import { StyledBurderMenuContianer , StyledBurderMenu , StyledMenuText , StyledMenuIcon , InsideBurgerIcon } from './StyledBurgerMenu'
import homeIcon from '../../assets/logoBurderNav.png'
import useMedia from '../../customHooks/UseMedia'


const BurgerMenu = ()=>{
    const {isMobile} = useMedia();
    const [isOpen,setIsOpen] = useState(false);

    return (
        <StyledBurderMenuContianer>
            <StyledBurderMenu role="navigation" isOpen={isOpen}>
                <div id="menuToggle">
                <div className='circle'></div>
                    <input type="checkbox" onClick={()=>setIsOpen(!isOpen)}/>
                        <span></span>
                        <span></span>
                        <span></span>

                    <ul id="menu">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contact</li></a>
                    <InsideBurgerIcon isMobile={isMobile} className="image featured burger-icon" src={homeIcon} alt="" />
                    </ul>
                    
                </div>
            </StyledBurderMenu>
                        <StyledMenuText>Menu</StyledMenuText>
            <StyledMenuIcon isMobile={isMobile} className="image featured" src={homeIcon} alt="" />
        </StyledBurderMenuContianer>
    )

}


export default BurgerMenu;