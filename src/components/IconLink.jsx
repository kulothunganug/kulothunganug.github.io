import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const IconLink = ({ IconComponent, ...rest }) => (
  <Container {...rest}>{IconComponent}</Container>
);

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.25s ease-in;
  color: ${p => p.theme.textColor};

  &:hover {
    background-color: ${p => p.hoverColor};
    color: white;
    transform: scale(1.1);
  }
`;

export default IconLink;
