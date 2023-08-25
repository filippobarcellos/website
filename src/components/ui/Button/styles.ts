import styled from 'styled-components';
import { ButtonProps } from './Button';

type StyledButtonProps = Pick<ButtonProps, 'variant' | 'size'>;

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: ${({ size }) =>
    size === 'medium' ? '46px' : size === 'large' ? '56px' : '48px'};
  padding: ${({ size }) => (size === 'medium' ? '0px 18px' : '0px 16px')};
  border-radius: 56px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.white};
  background-color: transparent;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return `
        background: radial-gradient(
          94.59% 100% at 50% 100%,
          ${theme.colors.gold.light[200]} 0%,
          ${theme.colors.gold.dark[500]} 100%);
          border: 1px solid rgba(255, 255, 255, 0.56);
        `;
      case 'secondary':
        return `
        background: radial-gradient(88.25% 126.79% at 50% 100%, rgba(255, 198, 69, 0.24) 0%, rgba(255, 198, 69, 0) 100%);
        border: 1px solid ${theme.colors.gold.light[50]}});
        `;
      case 'tertiary':
        return `
          background-color: transparent;
          border: 1px solid ${theme.colors.primary.white}});
          `;
    }
  }}

  ${({ disabled }) => {
    if (disabled) {
      return `
        background-image: linear-gradient(180deg, #0F0027 0%, #11002D 100%);
        border: 1px solid #1B0046;

        &:hover {
          background-image: linear-gradient(180deg, #0F0027 0%, #11002D 100%);
        }
      `;
    }
  }}
`;

export const Icon = styled.div`
  pointer-events: none;
  margin-left: auto;
`;
