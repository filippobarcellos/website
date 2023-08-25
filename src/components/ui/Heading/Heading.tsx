import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

type HeadingProps = {
  color?: string;
  size?: keyof typeof theme.fonts.sizes;
  fontWeight?: 400 | 500 | 700;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = styled('h3').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  font-size: clamp(1.5rem, 8vw - 2rem, 2rem);
  font-weight: 400;
  line-height: 38px;
  color: white;
`;

export default Heading;
