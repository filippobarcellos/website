import React from 'react';
// import scrollTo from 'gatsby-plugin-smoothscroll';

import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText/GradientText';

import { Routes } from '@/constants/routes';
import { jackpotValues } from '@/constants/jackpot';

import * as S from './styles';

const JackpotPrize = () => {
  return (
    <S.Container>
      <S.GradientBackground />
      <S.Content>
        <GradientText>Jackpot prize breakdown</GradientText>
        <S.SubTitle>
          The more numbers you match, the bigger the prize!
        </S.SubTitle>

        <S.Timeline>
          <S.TimeLineBar />
          <S.TimeLineRow>
            <S.TimeLineBarMobile />
            {jackpotValues.map(({ games, value }, index) => (
              <S.Jackpot key={index}>
                <S.JackpotCircle>
                  <span>W</span>
                </S.JackpotCircle>
                <div>
                  <S.JackpotText>
                    {games} {games > 1 ? 'numbers' : 'number'}
                  </S.JackpotText>

                  <S.JackpotValue maxJackpot={index === 4}>
                    {value}
                  </S.JackpotValue>
                </div>
              </S.Jackpot>
            ))}
          </S.TimeLineRow>
        </S.Timeline>

        <S.Buttons>
          <Button
            trackingTag="PlayNow4"
            click={() => {
              console.log(Routes.FMM);
            }}
          >
            Play now for £2
          </Button>
          <Button
            variant="secondary"
            trackingTag="HowToPlay3"
            // click={() => scrollTo('#how_to_play')}
          >
            How to play
          </Button>
        </S.Buttons>
        <S.PrizeInfo>
          *Actual prizes will vary each week, depending on how many tickets are
          sold and how many entries match the same numbers.
        </S.PrizeInfo>
      </S.Content>
      <S.ImageBG />
    </S.Container>
  );
};

export default JackpotPrize;
