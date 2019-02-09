//npm files
import React from 'react';
import Page from './Templates/Page';
import HomePage from './Pages/HomePage';

export default () => {
  return (
    <Page>
      <HomePage
        heading="Devlopment is Beautiful"
        quote="It is because of the ability to express myself and to be creative that I like software development so much"
      />
    </Page>
  );
};
