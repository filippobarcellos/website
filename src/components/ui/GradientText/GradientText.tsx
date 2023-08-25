import React from 'react';

import * as S from './styles';

type GradientTextProps = {
  children: string;
  style?: React.CSSProperties;
};

const GradientText = ({ children, ...props }: GradientTextProps) => {
  return <S.Text {...props}>{children}</S.Text>;
};

export default GradientText;
