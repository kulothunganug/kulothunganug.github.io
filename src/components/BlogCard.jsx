import React from 'react';
import styled from 'styled-components';

import { WLink } from '.';

const BlogCard = ({ title, summary, id }) => (
  <Container>
    <Title href={'/blog/' + id}>{title}</Title>
    <Summary>{summary}</Summary>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 30px;
  border-bottom: solid dodgerblue;
  margin-bottom: 20px;
`;

const Summary = styled.p`
  margin-top: 10px;
`;

const Title = styled(WLink)`
  font-family: 'Arvo', serif;
  color: ${p => p.theme.primaryColor};
  font-weight: bold;
  font-size: 30px;
`;

export default BlogCard;
