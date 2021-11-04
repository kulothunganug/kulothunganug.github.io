import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BlogCard } from '../../components';
import { useTitle } from '../../hooks';

const Blogs = () => {
  useTitle('Kulothungan - Blogs');
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    let res = await fetch('http://localhost:8000/blogs');
    res = await res.json();
    setBlogs(res['blogs']);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <H1>Blogs!</H1>
      <BlogsContainer>
        {blogs.map(item => (
          <BlogCard
            id={item.id}
            key={item.id}
            title={item.title}
            timestamp='10 hrs ago'
            summary={item.summary}
          />
        ))}
      </BlogsContainer>
    </Container>
  );
};

const BlogsContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
