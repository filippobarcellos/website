import React from 'react';
import Jackpot from '@/components/shared/Jackpot';
import Divider from '@/components/ui/Divider';
import GradientText from '@/components/ui/GradientText';
import GradientBackground from '@/components/ui/GradientBackground';

import * as S from './styles';

const Entry = () => {
  return (
    <>
      <S.Container>
        <div className="section_container">
          <S.Content>
            <GradientText>What are you waiting for?</GradientText>

            <S.SubTitle>Pick your numbers for this weeks fixtures</S.SubTitle>

            <S.JackpotContainer>
              <Jackpot />
            </S.JackpotContainer>

            <S.HeroImage />
          </S.Content>
        </div>
        <GradientBackground />
      </S.Container>
      <Divider variant="secondary" />
    </>
  );
};

export default Entry;
