import React from 'react';
import styled from 'styled-components';

import { WLink } from '../components';

const PageNotFound = () => (
  <Container>
    <H1>404!</H1>
    <H2>This is not the web page you are looking for.</H2>
    <H2>
      Please goto <WLink href='/'>home</WLink> or{' '}
      <WLink href='/blogs'>blog</WLink> page
    </H2>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: ${p => p.theme.backgroundColor};
  color: ${p => p.theme.textColor};
`;

const H1 = styled.h1`
  font-size: 100px;
  font-family: 'Arvo', serif;
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 90px;
  }
`;

const H2 = styled.h2`
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export default PageNotFound;
