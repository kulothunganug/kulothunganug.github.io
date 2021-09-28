import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const IconButton = ({ href, hoverColor, className, IconComponent }) => (
  <Container href={href} hoverColor={hoverColor} className={className}>
    {IconComponent}
  </Container>
);

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.25s ease-in;

  &:hover {
    background-color: ${p => p.hoverColor};
    transform: scale(1.1);
  }
`;

export default IconButton;
