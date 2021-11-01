import React from 'react';
import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';

import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const Home = () => {
  const { theme, setTheme } = useTheme();

  return (
      <Container>
        <Header />
        <Body />
        <Footer />
        <IconContainer>
          {theme == 'light' ? (
            <BsMoon
              size={28}
              onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
            />
          ) : (
            <BsSun
              size={25}
              onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
            />
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