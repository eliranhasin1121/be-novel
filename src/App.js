import React from 'react';
import { Route } from "react-router";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { ConfigProvider } from 'antd';
import Main from './containers/Main/Main';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import { AppWrapper } from './App.styled';
import createStore from './data/store';

const routes = [
  { path: "/", component: Main, isExact: true },
  { path: "/about", component: About, isExact: true },
  { path: "/team", component: Team, isExact: true },
  { path: "/contact", component: Contact, isExact: true },

];

function App() {
  return (
    <Provider store={createStore()}>
      <ConfigProvider direction="rtl">
        <AppWrapper>
          <BrowserRouter>
            {routes.map(route => (
              <Route
                exact={route.isExact}
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))
            }
          </BrowserRouter>
        </AppWrapper>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
