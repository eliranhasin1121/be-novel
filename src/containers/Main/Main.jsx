import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'antd';
import { Icon } from '@ant-design/compatible';
import { MainWrapper } from './Main.styled';
import { changeLanguage, getActiveLanguage } from '../../config/translations/utils';
import { Text, FlexDivCenter } from '../../components/Typography/Typography';
import { loginAction } from '../../data/modules/auth/auth.actions';
import Home from '../../components/Home';
import About from '../../components/About';
import Team from '../../components/Team';

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

  return (
      <div id="page-wrapper">
				<section>
					<Home/>
				</section>
        
				<section id="main">
					<div class="row gtr-200">
						<div class="col-12">
                    		<About/>
						</div>
							<div class="col-12">
							<h2 className="our-team-header">OUR TEAM</h2>
								<Team/>
							</div>
						</div>
				</section>
		</div>


  );
};