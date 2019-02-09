import React, { useState } from 'react';
import { useSpring } from 'react-spring';

import { BackgroundImage } from '../Styles/Background';
import Menu from '../Components/Menu';
import Header from '../Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from '../Routing';

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
        <Header toggler={toggler} />
        {toggleMenu && (
          <Menu
            toggler={toggler}
            toggleMenu={toggleMenu}
            animatedMenu={animatedMenu}
            smoothBlur={smoothBlur}
          />
        )}
        <Routing />
      </>
    </Router>
  );
};
