import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'wouter';

const Blog = ({ params }) => {
  if (isNaN(Number(params.id))) {
    return <Redirect to='/404' />;
  }

  return (
    <Container>
      <h1>Welcome to Blog #{params.id}.</h1>
    </Container>
  );
};

const Container = styled.div`
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.backgroundColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Blog;
