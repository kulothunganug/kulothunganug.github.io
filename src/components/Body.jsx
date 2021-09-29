import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const Body = () => (
  <Container>
    <P>a self-taught developer seeking to learn new things.</P>
    <Tags>
      <Tag href='https://www.python.org/'>Python</Tag>
      <Tag href='https://kivy.org/'>Kivy</Tag>
      <Tag href='https://www.djangoproject.com/'>django</Tag>
      <Tag href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
        JavaScript
      </Tag>
      <Tag href='https://developer.mozilla.org/en-US/docs/Web/css'>CSS</Tag>
      <Tag href='https://developer.mozilla.org/en-US/docs/Web/html'>HTML</Tag>
      <Tag href='https://reactjs.org/'>React</Tag>
      <Tag href='https://reactnative.dev/'>React Native</Tag>
      <Tag href='https://firebase.google.com/'>Firebase</Tag>
    </Tags>
  </Container>
);

const Container = styled.div``;

const P = styled.p`
  font-size: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
  }
`;

const Tag = styled(Link)`
  font-size: 15px;
  background-color: crimson;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Tags = styled.div`
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export default Body;
