import React from 'react';

import * as S from './styles';

export type TeamIndicatorProps = {
  colors: [string, string];
  size?: 'small' | 'medium';
};

const TeamIndicator = ({ colors, size = 'medium' }: TeamIndicatorProps) => {
  const [primary, secondary] = colors;
  return (
    <S.Container
      size={size}
      primary={primary || 'white'}
      secondary={secondary || 'white'}
    />
  );
};

export default TeamIndicator;
