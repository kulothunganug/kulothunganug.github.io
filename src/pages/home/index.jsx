import React from 'react';
import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';

import { useTheme } from '../../contexts/ThemeContext';
import Body from './Body';
import Footer from './Footer';

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Body />
      <Footer />
      <IconContainer>
        {theme == 'light' ? (
          <BsMoon size={28} onClick={toggleTheme} />
        ) : (
          <BsSun size={28} onClick={toggleTheme} />
        )}
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 100px 0 0 100px;
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.backgroundColor};
  transition: all 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    padding: 50px 0 0 30px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
  cursor: pointer;
  position: fixed;
  right: 100px;
  bottom: 50px;

  @media only screen and (max-width: 600px) {
    right: 0px;
    bottom: 60px;
  }
`;

export default Home;
