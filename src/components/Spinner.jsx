import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 4rem;
  height: 4rem;
  display: inline-block;
  border-radius: 50%;
  border: 3px solid ${p => p.theme.surfaceColor};
  border-top-color: ${p => p.theme.textColor};
  animation: 1s ${spin} infinite ease-in-out;
`;

export default Spinner;
