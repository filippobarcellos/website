import React from 'react';
import styled from 'styled-components';

function getVariantColors(variant: Variant) {
  switch (variant) {
    case 'primary':
      return {
        colors: ['rgba(255, 255, 255, 0.32)', 'rgba(255, 255, 255, 0)'],
      };
    case 'secondary':
      return {
        colors: ['#5F0CC7', '#0A022D'],
      };
    default:
      return {
        colors: ['rgba(255, 255, 255, 0.32)', 'rgba(255, 255, 255, 0)'],
      };
  }
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 2px;
  opacity: ${({ variant }) => (variant === 'primary' ? 0.32 : 1)};
  background-image: ${({ variant }) => `radial-gradient(
    50% 50% at 50% 50%,
    ${getVariantColors(variant).colors[0]} 31.77%,
    ${getVariantColors(variant).colors[1]} 100%
  );`};
`;

type Variant = 'primary' | 'secondary';

type ContainerProps = {
  variant: Variant;
};

type DividerProps = {
  variant?: Variant;
};

const Divider = ({ variant = 'primary' }: DividerProps) => {
  return <Container variant={variant} />;
};

export default Divider;
