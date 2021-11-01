import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';

const WLink = styled(Link)`
  color: #fff;

  &:visited {
    color: ${p => p.theme.primaryColor};
  }
`;

export default WLink;
