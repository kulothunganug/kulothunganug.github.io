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
    <div>
      <Container>
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
        <Header />
        <Body />
        <Footer />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: ${p => p.theme.textColor};
  background: ${p => p.theme.backgroundColor};
  padding: 100px 0 0 100px;

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

  @media only screen and (max-width: 600px) {
    right: -10px;
  }
`;

export default Home;
