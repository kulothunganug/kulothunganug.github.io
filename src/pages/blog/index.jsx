import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Redirect, useLocation } from 'wouter';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useTitle } from '../../hooks';
import { Spinner } from '../../components';
import { getBlog } from '../../api';

const Components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={dracula}
        language={match[1]}
        wrapLongLines={true}
        PreTag='div'
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const Blog = ({ params }) => {
  const [location, setLocation] = useLocation();
  const [blog, setBlog] = useState({});
  useTitle('Blog - ' + blog.title);

  const fetchBlog = async () => {
    let blog_ = await getBlog(params.id);
    if (blog_ == null) {
      setLocation('/404');
      return;
    }
    setBlog(blog_);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  if (isNaN(Number(params.id))) {
    return <Redirect to='/404' />;
  }

  return (
    <Container>
      {!blog.content ? (
        <Spinner />
      ) : (
        <Markdown
          components={Components}
          children={blog.content}
          linkTarget='_blank'
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 250px 50px 250px;

  @media only screen and (max-width: 600px) {
    padding: 50px 10px 50px 10px;
  }
`;

const Markdown = styled(ReactMarkdown)`
  white-space: pre-wrap;

  p {
    font-size: 18px;
  }

  h1 {
    font-family: 'Arvo', serif;
  }

  a {
    color: ${p => p.theme.primaryColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  code {
    font-size: 16px;
    background-color: ${p => p.theme.surfaceColor};
  }

  ul {
    list-style-position: inside;
  }

  blockquote {
    color: #666;
    padding-left: 1.5em;
    border-left: 4px solid ${p => p.theme.primaryColor};
  }

  @media only screen and (max-width: 600px) {
    code {
      font-size: 14px;
    }
  }
`;

export default Blog;
