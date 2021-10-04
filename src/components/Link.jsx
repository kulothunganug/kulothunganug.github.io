import React from 'react';
import styled from 'styled-components';

const Link = ({ children, ...rest  }) => (
  <A target='_blank' rel='noopener noreferrer' {...rest}>
    {children}
  </A>
);

const A = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export default Link;
