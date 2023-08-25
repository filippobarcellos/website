import styled from 'styled-components';
import { TeamIndicatorProps } from './TeamIndicator';

type ContainerProps = Pick<TeamIndicatorProps, 'size'> & {
  primary: string;
  secondary: string;
};

export const Container = styled.div<ContainerProps>`
  width: ${({ size }) => (size === 'small' ? 12 : 16)}px;
  height: ${({ size }) => (size === 'small' ? 12 : 16)}px;
  background: ${({ primary, secondary }) =>
    `linear-gradient(-45deg, ${primary} 50%, ${secondary} 50%)`};
  border-radius: 50%;
`;
