import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  z-index: 0;

  position: absolute;
  overflow: hidden;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;

  background: #020018;
  background: linear-gradient(180deg, #020018 0%, rgba(83, 10, 199, 1) 100%);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 300px;
  }
`;

const GradientBackground = () => {
  return <Container />;
};

export default GradientBackground;
