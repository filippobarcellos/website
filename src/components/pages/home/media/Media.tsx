import React from 'react';
import Image from 'next/image';

import Heading from '@/components/ui/Heading/Heading';

import * as S from './styles';

const Media = () => {
  return (
    <S.Container>
      <div className="section_container">
        <S.Content>
          <Heading level={3}>What the media are saying...</Heading>
          <S.Row>
            <a
              href={
                'https://egr.global/intel/news/zeal-invests-in-uk-sweepstake-startup-circl'
              }
              target="_blank"
            >
              <Image
                src={`/images/media/media_1.png`}
                alt={'EGR Global logo'}
                width={96}
                height={50}
              />
            </a>
            <a
              href={
                'https://www.business-live.co.uk/technology/embrace-change-founders-advice-raising-26246082'
              }
              target="_blank"
            >
              <Image
                src={`/images/media/media_2.png`}
                alt={'Business Live logo'}
                width={208}
                height={32}
              />
            </a>
            <a
              href={
                'https://www.football.london/advertising-features/join-circls-five-match-millions-26980540'
              }
              target="_blank"
            >
              <Image
                src={`/images/media/media_3.png`}
                alt={'Football London logo'}
                width={166}
                height={45}
              />
            </a>
            <a
              href={
                'https://www.mirror.co.uk/sport/betting/win-up-1million-circls-five-30044132'
              }
              target="_blank"
            >
              <Image
                src={`/images/media/media_4.png`}
                alt={'Mirror logo'}
                width={120}
                height={45}
              />
            </a>
          </S.Row>
        </S.Content>
      </div>
    </S.Container>
  );
};

export default Media;
