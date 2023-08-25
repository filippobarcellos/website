import React from 'react';
import Image from 'next/image';

import Heading from '@/components/ui/Heading/Heading';

import * as S from './styles';

const Partners = () => {
  return (
    <S.Container>
      <div className="section_container">
        <S.Content>
          <Heading level={3}>Check out our awesome partners</Heading>
          <S.Row>
            <a href={'https://zeal-ventures.com/'} target="_blank">
              <Image
                src={`/images/partners/partner_1.png`}
                width={122}
                height={57}
                alt={'Zeal logo'}
              />
            </a>
            <a href={'https://www.gamblingcommission.gov.uk/'} target="_blank">
              <Image
                src={`/images/partners/partner_2.png`}
                width={168}
                height={45}
                alt={'Gambling Commission logo'}
              />
            </a>
            <a href={'https://www.gamstop.co.uk/'} target="_blank">
              <Image
                src={`/images/partners/partner_3.png`}
                width={153}
                height={28}
                alt={'Gam Stop logo'}
              />
            </a>
            <a href={'https://www.gamcare.org.uk/'} target="_blank">
              <Image
                src={`/images/partners/partner_4.png`}
                width={163}
                height={47}
                alt={'Gam Care logo'}
              />
            </a>
            <a href={'https://www.statsperform.com/opta'} target="_blank">
              <Image
                src={`/images/partners/partner_5.png`}
                width={106}
                height={46}
                alt={'OPTA logo'}
              />
            </a>
          </S.Row>
        </S.Content>
      </div>
    </S.Container>
  );
};

export default Partners;
