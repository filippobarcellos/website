import styled from 'styled-components';
import { InputProps } from './Input';

type InputStyledProps = Pick<InputProps, 'error'>;
type LabelProps = Pick<InputProps, 'size'>;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  flex: 1;
  position: relative;
`;

export const Input = styled.input<InputStyledProps>`
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.primary.red : theme.colors.white.light[700]};
  border-radius: 6px;
  padding: 12px 42px 12px 8px;
  color: ${({ theme }) => theme.colors.white.light[400]};
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.white};
  }
`;

export const Label = styled.label<LabelProps>`
  font-size: ${({ size }) => (size === 'small' ? 16 : 20)}px;
  font-weight: ${({ size }) => (size === 'small' ? 600 : 700)};
  color: ${({ theme }) => theme.colors.primary.white};
`;

export const IconContainer = styled.div<LabelProps>`
  position: absolute;
  right: 16px;
  top: ${({ size }) => (size === 'small' ? 44 : 48)}px;
  z-index: 1;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.primary.red};
  font-size: 14px;
  font-weight: 500;
`;
