import styled from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

const MenuButton = styled.button`
  outline: none;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled(animated.div)`
  position: absolute;
  width: 40%;
  height: 60%;
  top: 0;
  right: 0;
  background: #ffaf42;
  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.45);
  z-index: 10;
`;

const MenuItem = styled(Link)`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  font-family: Risque;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 35px;
  text-decoration: none;
  color: inherit;
  &:last-child {
    border: none;
  }
`;

const BackgroundBlur = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.45);
`;

export { Menu, MenuButton, MenuItem, BackgroundBlur };
