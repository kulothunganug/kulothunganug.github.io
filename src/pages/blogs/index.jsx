import React from 'react';
import styled from 'styled-components';

import { BlogCard } from '../../components';

const Blogs = () => (
  <Container>
    <H1>Blogs!</H1>
    <BlogsContainer>
      {Array.from({ length: 10 }, (item, index) => (
        <BlogCard
          id={index}
          title={index + ' Lorem ipsum dolor sit amet'}
          timestamp='10 hrs ago'
          summary='
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis leo
        at pulvinar accumsan. Proin consectetur ante eget ex vulputate, non tempus
        nulla interdum. Integer nisl odio, ultrices fermentum erat gravida,
        sodales placerat massa. Ut nec malesuada lorem. Cras accumsan luctus
        faucibus. Curabitur suscipit turpis massa, nec egestas lectus mollis
        blandit. Nulla gravida quis justo vitae vulputate. Integer quis neque
        tempor, eleifend risus in, facilisis purus. Quisque ut orci lobortis,
        egestas lorem vel, elementum augue. Proin vitae ligula auctor, sagittis
        urna vel, cursus nunc. Praesent pulvinar eros eu faucibus mattis. Proin
        sit amet pharetra ipsum. Aenean ullamcorper eros eget bibendum dictum. Sed'
        />
      ))}
    </BlogsContainer>
  </Container>
);

const BlogsContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.backgroundColor};
  padding: 50px 250px 0 250px;

  @media only screen and (max-width: 600px) {
    padding: 50px 10px 0 10px;
  }
`;

const H1 = styled.h1`
  align-self: center;
  margin-bottom: 40px;
  font-size: 50px;
`;

export default Blogs;
