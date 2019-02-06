//npm files
import React, { useState } from 'react';
import { useSpring } from 'react-spring';
//image file
import logo from './MyLogo.png';
//styles from styled components
import { Header, HeaderTitle } from './Styles/HeaderStyles';
import {
  Menu,
  MenuButton,
  MenuItem,
  BackgroundBlur
} from './Styles/MenuStyles';
//material icon
import MenuIcon from './menu-icon';

export default () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const animatedMenu = useSpring({
    opacity: toggleMenu ? 1 : 0,
    width: toggleMenu ? '40%' : '0%'
    // transform: toggleMenu ? 'translateX(0)' : 'translateX(100px)'
  });
  const smoothBlur = useSpring({
    opacity: toggleMenu ? 1 : 0
  });
  const toggler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
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
            <MenuItem>Projects</MenuItem>
            <MenuItem>Resume</MenuItem>
            <MenuItem>About Me</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
          <BackgroundBlur style={smoothBlur} onClick={toggler} />
        </>
      )}
    </>
  );
};
