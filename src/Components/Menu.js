import React from 'react';

import { Menu, MenuItem, BackgroundBlur } from '../Styles/MenuStyles';

export default ({ toggler, toggleMenu, animatedMenu, smoothBlur }) => {
  return (
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
  );
};
