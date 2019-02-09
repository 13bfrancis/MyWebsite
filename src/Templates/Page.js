import React, { useState } from 'react';
import { useSpring } from 'react-spring';

import logo from '../Images/MyLogo.png';
import MenuIcon from '../Images/menu-icon.js';
import { BackgroundImage } from '../Styles/Background';
import { Header, HeaderTitle } from '../Styles/HeaderStyles';
import {
  MenuButton,
  MenuItem,
  Menu,
  BackgroundBlur
} from '../Styles/MenuStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

const Testing = () => <h1>Hello</h1>;

export default ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const animatedMenu = useSpring({
    opacity: toggleMenu ? 1 : 0,
    width: toggleMenu ? '40%' : '0%'
  });
  const smoothBlur = useSpring({
    opacity: toggleMenu ? 1 : 0
  });
  const toggler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <Router>
      <>
        <BackgroundImage
          src={
            'https://images.unsplash.com/photo-1515524738708-327f6b0037a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
          }
        />
        <Header>
          <HeaderTitle>
            <img
              src={logo}
              style={{ width: '35%', height: '100%' }}
              alt="BJF Development"
            />
          </HeaderTitle>
          <MenuButton onClick={toggler}>
            <MenuIcon
              style={{
                width: '70px',
                height: '70px'
              }}
            />
          </MenuButton>
        </Header>
        {toggleMenu && (
          <>
            <Menu style={animatedMenu}>
              <MenuItem to="/projects" onClick={toggler}>
                Projects
              </MenuItem>
              <MenuItem to="/resume" onClick={toggler}>
                Resume
              </MenuItem>
              <MenuItem to="/about" onClick={toggler}>
                About Me
              </MenuItem>
              <MenuItem to="/contact" onClick={toggler}>
                Contact
              </MenuItem>
            </Menu>

            <BackgroundBlur style={smoothBlur} onClick={toggler} />
          </>
        )}
        <Switch>
          <Route path="/projects" component={Testing} />
          <Route component={HomePage} />
        </Switch>
      </>
    </Router>
  );
};
