import React from 'react';
import styled from 'styled-components';

import { Header, Body, Footer } from './components';

const App = () => (
  <Container>
    <Header />
    <Body />
    <Footer />
  </Container>
);

const Container = styled.div`
  padding: 150px;

  @media only screen and (max-width: 600px) {
    padding: 150px 0 0 40px;
  }
`;

export default App;
