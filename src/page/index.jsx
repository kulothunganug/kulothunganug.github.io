import React from 'react';
import styled from 'styled-components';

import Body from './Body';
import Footer from './Footer';

const Home = () => {
  return (
    <Container>
      <Body />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  padding: 100px 100px 50px 100px;
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.backgroundColor};
  transition: all 0.25s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    padding: 50px 30px 30px 30px;
  }
`;

export default Home;
