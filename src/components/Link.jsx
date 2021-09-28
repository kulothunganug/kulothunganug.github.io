import React from 'react';
import styled from 'styled-components';

const Link = ({ href, children, className }) => (
  <A target='_blank' rel='noopener' href={href} className={className}>
    {children}
  </A>
);

const A = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export default Link;
