import React, { useState, useEffect, useRef } from 'react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

import Button from '@/components/ui/Button';
import FixtureSlider from '../FixturesSlider';
import { Routes } from '@/constants/routes';
import { getReturnCountdownFromSeconds } from '@/utils/format';

import * as S from './styles';
import { getFixtures } from '@/services/fixtures';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['fixtures'], getFixtures);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Jackpot = () => {
  const intervalRef = useRef<NodeJS.Timeout>();

  const { data } = useQuery({ queryKey: ['fixtures'], queryFn: getFixtures });

  const [localDate, setLocalDate] = useState(new Date());

  const dateFormatted = new Date(localDate).getTime();
  const [countdown, setCountdown] = useState(dateFormatted);

  useEffect(() => {
    if (data?.startDate) {
      setLocalDate(data.startDate);
      const dateFormatted = new Date(data.startDate).getTime();
      const now = new Date().getTime();
      setCountdown(dateFormatted - now);
    }
  }, [data?.startDate]);

  const { hours, days, minutes, seconds } =
    getReturnCountdownFromSeconds(countdown);

  function stopTimer() {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (dateFormatted - new Date().getTime() <= 1) {
        return stopTimer();
      }

      setCountdown(dateFormatted - new Date().getTime());
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [countdown]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Our next Five Match Millions</S.Title>
      </S.Header>

      <S.FixtureSliderContainer>
        {data?.circls && <FixtureSlider circls={data?.circls} />}
      </S.FixtureSliderContainer>
      <S.Body>
        <S.Subtitle>Win cash up to</S.Subtitle>
        <span>£1,000,000</span>
        <p>
          Pick 5 numbers. Enjoy the football.
          <br />
          Match your numbers & win!
        </p>
        <S.ButtonContainer>
          <Button
            size="large"
            trackingTag="PlayNow2"
            click={() => {
              console.log(Routes.FMM);
            }}
          >
            Play now for £2
          </Button>
        </S.ButtonContainer>

        {data?.startDate && (
          <S.Countdown>
            {`${days}d ${hours}h ${minutes}m ${seconds}s`}
            <span>left to enter</span>
          </S.Countdown>
        )}
      </S.Body>
    </S.Container>
  );
};

export default Jackpot;
