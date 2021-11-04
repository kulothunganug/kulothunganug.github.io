import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Redirect, useLocation } from 'wouter';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useTitle } from '../../hooks';

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
  useTitle('Blog ' + blog.title);

  const fetchData = async () => {
    let res = await fetch('http://localhost:8000/blog/' + params.id);
    res = await res.json();
    if (res['blog'] == null) {
      setLocation('/blogs');
    }
    setBlog(res['blog']);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isNaN(Number(params.id))) {
    return <Redirect to='/404' />;
  }

  return (
    <Container>
      <Markdown
        components={Components}
        children={blog.content}
        linkTarget='_blank'
      />
    </Container>
  );
};

const Container = styled.div`
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.backgroundColor};
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

  a {
    color: ${p => p.theme.primaryColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    list-style-position: inside;
  }

  blockquote {
    color: #666;
    padding-left: 1.5em;
    border-left: 4px solid ${p => p.theme.primaryColor};
  }
`;

export default Blog;
