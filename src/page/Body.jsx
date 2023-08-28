import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Typed } from '../components';

const Body = () => (
  <Container>
    <H2>
      Hey there! <Span>👋</Span>,
    </H2>
    <H1
      strings={[
        "I'm Kulothungan.",
        "I'm a student.",
        "I'm a self-taught developer.",
        "I'm a speed cuber.",
      ]}
    />
  </Container>
);

const Container = styled.div``;

const H1 = styled(Typed)`
  font-size: 90px;
  font-family: 'Arvo', serif;
  font-weight: bold;
  transition: color 0.25s ease-in;
  display: inline-block;
  overflow: auto;

  &:hover {
    color: ${p => p.theme.primaryColor};
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const H2 = styled.h2`
  font-size: 40px;
  transition: color 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const wave = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`;

const Span = styled.span`
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

export default Body;
