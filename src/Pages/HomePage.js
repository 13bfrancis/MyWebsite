import React from 'react';
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
  text-shadow: 2px 2px orange;
`;

export default ({ heading, quote }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        margin: '20px',
        flexGrow: '1'
      }}
    >
      <Heading>{heading}</Heading>
      <Quote>{quote}</Quote>
    </div>
  );
};
