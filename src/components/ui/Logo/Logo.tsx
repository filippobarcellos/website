import React from 'react';
import Image from 'next/image';

import * as S from './styles';

type LogoProps = {
  hideText?: boolean;
};

const Logo = ({ hideText }: LogoProps) => {
  return (
    <S.Container onClick={() => console.log('/')}>
      <Image
        src={'/images/logo.svg'}
        width={100}
        height={20}
        alt="Play Circl"
      />
      {!hideText && <S.LogoText>Circl</S.LogoText>}
    </S.Container>
  );
};

export default Logo;
