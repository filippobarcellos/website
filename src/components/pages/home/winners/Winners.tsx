import React from 'react';
import Image from 'next/image';

// import scrollTo from 'gatsby-plugin-smoothscroll';
// import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText/GradientText';

import { Routes } from '@/constants/routes';
import { formatNumberToCurrency } from '@/utils/format';
// import useGetFixtures from '@/services/fmm/useGetFixtures';
import TrustBox from '@/components/shared/TrustPilot/TrustPilot';

import * as S from './styles';

const Winners = () => {
  // const { data } = useGetFixtures();

  // const breakpoints = useBreakpoint();
  const isMobile = false;

  const data = {
    winningInfo: {
      totalWinners: 200,
      totalWinnings: 400,
    },
  };

  return (
    <S.Container>
      <S.GradientBackground />
      <div className="section_container">
        <S.Content>
          <GradientText>Trusted by football fans across the UK!</GradientText>

          <S.SubTitle>Real winners, real cash</S.SubTitle>

          <S.Card>
            <S.Body>
              {!isMobile && (
                <S.Stats>
                  <div>
                    <S.Value>{data.winningInfo.totalWinners}</S.Value>
                    <S.Label>Total Winners</S.Label>
                  </div>

                  <S.Separator />
                </S.Stats>
              )}

              <S.Stats>
                <S.WinnerImageContainer>
                  <Image
                    src="/images/winner/chris.jpg"
                    width={220}
                    height={300}
                    alt="Circl winner"
                    style={{ borderRadius: 12 }}
                  />

                  <p>
                    "I've won over £1000 playing Circl so far! I just love the
                    excitement it brings to the match." - Chris
                  </p>
                  <TrustBox width={'150px'} height={'80px'} />
                </S.WinnerImageContainer>
                <S.Separator />
              </S.Stats>

              {isMobile && (
                <S.Stats>
                  <div>
                    <S.Value>{data.winningInfo.totalWinners}</S.Value>
                    <S.Label>Total Winners</S.Label>
                  </div>

                  <S.Separator />
                </S.Stats>
              )}

              <S.Stats>
                <div>
                  <S.Value>
                    {formatNumberToCurrency(data.winningInfo.totalWinnings, {
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    })}
                  </S.Value>
                  <S.Label>Total Winnings</S.Label>
                </div>
              </S.Stats>
            </S.Body>
            <Slider />
          </S.Card>

          <div className="section_buttons">
            <Button
              trackingTag="PlayNow3"
              click={() => {
                console.log(Routes.FMM);
              }}
            >
              Play now for £2
            </Button>
            <Button
              variant="secondary"
              trackingTag="HowToPlay2"
              // click={() => scrollTo('#how_to_play')}
            >
              How to play
            </Button>
          </div>
        </S.Content>
        <S.ImageBG />
      </div>
    </S.Container>
  );
};

export default Winners;

const WinnersSlider = () => {
  return (
    <>
      <S.Winner>
        <S.WinnerAvatarContainer>
          <Image
            src={'/images/avatars/will.jpeg'}
            alt="winner avatar"
            width={20}
            height={20}
          />
        </S.WinnerAvatarContainer>
        <S.WinnerText>Will won £3000!</S.WinnerText>
      </S.Winner>
      <S.Winner>
        <S.WinnerAvatarContainer>
          <Image
            src={'/images/avatars/rebecca.jpeg'}
            alt="winner avatar"
            width={20}
            height={20}
          />
        </S.WinnerAvatarContainer>
        <S.WinnerText>Rebecca won £110!</S.WinnerText>
      </S.Winner>
      <S.Winner>
        <S.WinnerAvatarContainer>
          <Image
            src={'/images/avatars/glenn.jpeg'}
            alt="winner avatar"
            width={20}
            height={20}
          />
        </S.WinnerAvatarContainer>
        <S.WinnerText>Glen won £2500!</S.WinnerText>
      </S.Winner>
      <S.Winner>
        <S.WinnerAvatarContainer>
          <Image
            src={'/images/avatars/beverly.jpeg'}
            alt="winner avatar"
            width={20}
            height={20}
          />
        </S.WinnerAvatarContainer>
        <S.WinnerText>Beverley won £730!</S.WinnerText>
      </S.Winner>
      <S.Winner>
        <S.WinnerAvatarContainer>
          <Image
            src={'/images/avatars/dan.jpeg'}
            alt="winner avatar"
            width={20}
            height={20}
          />
        </S.WinnerAvatarContainer>
        <S.WinnerText>Dan won £1500!</S.WinnerText>
      </S.Winner>
      <S.Winner>
        <S.WinnerAvatarContainer>
          <Image
            src={'/images/avatars/chris.jpeg'}
            alt="winner avatar"
            width={20}
            height={20}
          />
        </S.WinnerAvatarContainer>
        <S.WinnerText>Chris won £1000!</S.WinnerText>
      </S.Winner>
    </>
  );
};

const Slider = () => {
  return (
    <S.Footer>
      <S.Slider>
        <div className="slide-track">
          <WinnersSlider />

          <WinnersSlider />
        </div>
      </S.Slider>
    </S.Footer>
  );
};
