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
import { BackgroundImage } from './Styles/Background';
//material icon
import MenuIcon from './menu-icon';
import IntroductionText from './IntroductionText';
import styled from 'styled-components';

const Heading = styled.h2`
  font-family: 'Rubik Mono One', sans-serif;
  text-align: center;
  width: 50%;
`;
const Quote = styled.p`
  font-family: 'Rubik Mono One', sans-serif;
  text-indent: 5%;
  width: 60%;
`;

export default () => {
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
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
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
      <IntroductionText
        heading="Devlopment is Beautiful"
        quote="It is becaue of the ability to express myself and to be creative that I like software development so much"
      />
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
    </div>
  );
};
