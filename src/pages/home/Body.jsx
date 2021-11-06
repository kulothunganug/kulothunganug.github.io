import React from 'react';
import styled, { keyframes } from 'styled-components';

import { WLink } from '~/components';

const Body = () => (
  <Container>
    <H2>
      Hey there! <Span>👋</Span>,
    </H2>
    <H1>I'm Kulothungan.</H1>
    <P>a self-taught developer seeking to learn new things.</P>
    <Caption>
      Check out my <WLink href='/blog'>blog</WLink>.
    </Caption>
  </Container>
);

const Caption = styled.h4`
  margin-top: 20px;
  transition: color 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const Container = styled.div``;

const H1 = styled.h1`
  font-size: 90px;
  font-family: 'Arvo', serif;
  font-weight: bold;
  transition: color 0.25s ease-in;
  display: inline-block;

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

const P = styled.p`
  font-size: 20px;
  transition: color 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
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
