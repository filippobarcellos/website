import React from 'react';
import { AiOutlineArrowRight as ArrowRight } from 'react-icons/ai';
// import { Segment } from 'utils/segment';

import Loader from '@/components/ui/Loader';

import * as S from './styles';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Size = 'small' | 'medium' | 'large';

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  style?: React.CSSProperties;
  trackingTag?: String;
  click?: any;
  isLoading?: boolean;
  showIcon?: boolean;
  icon?: any;
};

const Button = ({
  variant = 'primary',
  size = 'medium',
  showIcon = true,
  isLoading = false,
  children,
  style,
  disabled,
  trackingTag,
  click,
  icon,
  ...props
}: ButtonProps) => {
  function clickEvt() {
    // if (trackingTag) {
    //   Segment.track('ButtonClick', { button: trackingTag });
    // }
    click && click();
  }

  return (
    <S.Button
      variant={variant}
      size={size}
      style={style}
      disabled={disabled}
      onClick={clickEvt}
      {...props}
    >
      {isLoading ? <Loader /> : children}

      {!isLoading && showIcon && (
        <S.Icon>
          {icon ? (
            <img src={icon} alt="button icon" />
          ) : (
            <ArrowRight color="white" height={24} />
          )}
        </S.Icon>
      )}
    </S.Button>
  );
};

export default Button;
