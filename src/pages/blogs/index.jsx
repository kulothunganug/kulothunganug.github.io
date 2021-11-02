import React from 'react';
import styled from 'styled-components';

const Blogs = () => (
  <Container>
    <P>Welcome to Blogs!</P>
  </Container>
);

const Container = styled.div`
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.backgroundColor};
  height: 100vh;
`;

const P = styled.p``;

export default Blogs;
