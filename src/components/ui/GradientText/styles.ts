import styled from 'styled-components';

export const Text = styled.h3`
  font-size: clamp(1.5rem, 8vw - 2rem, 2.2rem);
  font-weight: 700;
  background: ${({ theme }) =>
    `-webkit-linear-gradient(${theme.colors.gold.light[500]}, ${theme.colors.gold.light[50]})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
