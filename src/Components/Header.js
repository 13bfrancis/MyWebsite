import React from 'react';
import { Link } from 'react-router-dom';
import { Header, HeaderTitle } from '../Styles/HeaderStyles';
import { MenuButton } from '../Styles/MenuStyles';
import MenuIcon from '../Images/menu-icon';
import logo from '../Images/MyLogo.png';

export default ({ toggler }) => {
  return (
    <Header>
      <HeaderTitle>
        <Link to="/">
          <img
            src={logo}
            style={{ width: '35%', height: '100%' }}
            alt="BJF Development"
          />
        </Link>
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
  );
};
