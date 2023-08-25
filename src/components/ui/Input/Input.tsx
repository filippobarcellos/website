import React, { useState, InputHTMLAttributes } from 'react';

import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline';
import { EyeOffOutline } from '@styled-icons/evaicons-outline/EyeOffOutline';

import * as S from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
  variant?: any;
  isValid?: boolean;
  error?: React.ReactNode;
  mask?: string;
  fsMask?: boolean;
  validate?: () => void;
};

const Input = ({
  name,
  label,
  variant = 'medium',
  error,
  mask,
  fsMask = false,
  isValid,
  validate,
  ...props
}: InputProps) => {
  const isPassword = props.type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  const hasError = !!error;

  const passwordTypeFormatted =
    isPassword && showPassword ? 'text' : 'password';

  function onBlur() {
    validate && validate();
  }

  return (
    <S.Container>
      <S.Label htmlFor={name} size={variant}>
        {label}
      </S.Label>

      <S.Input
        {...props}
        error={error}
        onBlur={onBlur}
        type={isPassword ? passwordTypeFormatted : props.type}
        className={fsMask ? 'fs-mask' : ''}
      />

      {isPassword && (
        <S.IconContainer onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <EyeOffOutline size={24} color="white" />
          ) : (
            <EyeOutline size={24} color="white" />
          )}
        </S.IconContainer>
      )}

      {hasError && <S.ErrorText>{error}</S.ErrorText>}
    </S.Container>
  );
};

export default Input;
