import styled from 'styled-components';

const Header = styled.header`
  display:  
  width: 100%;
  height: 150px;
  background: #fb8a22;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderTitle = styled.h1`
  padding: 5px;
  font-family: Risque;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 40px;
`;

export { Header, HeaderTitle };
