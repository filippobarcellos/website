import React from 'react';
import { Check } from '@styled-icons/fa-solid/Check';

import * as S from './styles';

type RadioButtonProps = {
  text: string;
  value: string;
  onClick: any;
  isChecked: boolean;
  size?: 'small' | 'medium';
  label?: string;
  showMostPopularLabel?: boolean;
  showIcon?: boolean;
};

const RadioButton = ({
  text,
  value,
  isChecked,
  onClick,
  size = 'medium',
  showIcon = true,
  label,
  showMostPopularLabel = false,
}: RadioButtonProps) => {
  return (
    <S.Wrapper>
      {showMostPopularLabel && (
        <S.MostPopularLabel>
          <div>
            <span>{label || 'Most popular choice'}</span>
          </div>
        </S.MostPopularLabel>
      )}

      <S.Container onClick={onClick} isChecked={isChecked} size={size}>
        <S.Content>
          {showIcon && <img src="/ticket.svg" />}

          <S.Text>{text}</S.Text>
          <div>
            <S.Value>{value}</S.Value>
            <S.RadioButton isChecked={isChecked}>
              {isChecked && <Check size={16} color="white" />}
            </S.RadioButton>
          </div>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default RadioButton;
