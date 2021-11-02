import React from 'react';
import styled from 'styled-components';

import { WLink } from '.';

const BlogCard = ({ title, summary, timestamp, id }) => (
  <Container>
    <Title href={'/blog/' + id}>{title}</Title>
    <Summary>{summary}</Summary>
    <ReleaseDate>{timestamp}</ReleaseDate>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 40px;
  border: 1px solid ${p => p.theme.textColor};
  margin-bottom: 20px;
`;

const ReleaseDate = styled.p`
  margin-top: 10px;
  font-style: italic;
  align-self: flex-end;
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
