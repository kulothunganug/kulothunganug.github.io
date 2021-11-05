import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BlogCard, Spinner } from '../../components';
import { useTitle } from '../../hooks';
import { getBlogs } from '../../api';

const Blogs = () => {
  useTitle('Kulothungan - Blog');
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(await getBlogs());
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Container>
      <H1>Blogs!</H1>
      {!blogs.length ? (
        <Spinner />
      ) : (
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
      )}
    </Container>
  );
};

const BlogsContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 250px 0 250px;

  @media only screen and (max-width: 600px) {
    padding: 20px 10px 0 10px;
  }
`;

const H1 = styled.h1`
  align-self: center;
  margin-bottom: 40px;
  font-size: 50px;
`;

export default Blogs;
