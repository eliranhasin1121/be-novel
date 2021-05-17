import React , {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage, getActiveLanguage } from '../../config/translations/utils';
import { loginAction } from '../../data/modules/auth/auth.actions';
import Home from '../../components/Home';
import About from '../../components/About';
import Team from '../../components/Team';
import Contact from '../../components/Contact';
import BurgerMenu from '../../components/BurgerMenu';
import useMedia from '../../customHooks/UseMedia'


export default () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { activeUser } = useSelector(store => store.auth);

  function onToggleLanguage() {
    return getActiveLanguage() === 'en'
      ? changeLanguage('he')
      : changeLanguage('en');
  }

  async function onLogin() {
    try {
      dispatch(loginAction());
    } catch (err) {
      console.log(err);
    }
  }

  const {isDevice} = useMedia();


  return (
      <div id="page-wrapper">
       {isDevice && <BurgerMenu/> }
				<section>
					<Home/>
				</section>
        
				<section id="main">
					<div className="row gtr-200">
						<div className="col-12">
              <About/>
						</div>
						<div className="col-12">
							<h2 className="our-team-header">OUR TEAM</h2>
								<Team/>
							</div>
						</div>
				</section>

        <section id="Contact">
					<div className="row gtr-200">
						<div className="col-12">
              <Contact/>
						</div>
          </div>
				</section>

		</div>


  );
};