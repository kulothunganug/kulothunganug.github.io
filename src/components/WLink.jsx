import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';

const WLink = styled(Link)`
  color: ${p => p.theme.primaryColor};
  text-decoration: none;

  &:visited {
    color: ${p => p.theme.primaryColor};
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default WLink;
