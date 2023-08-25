import React from 'react';

import Logo from '@/components/ui/Logo';

import * as S from './styles';
// import { getLinkToStore } from 'utils/navigation';

const menuArr = [
  { title: 'Home', link: process.env.SITE_URL },
  { title: 'FAQ', link: 'https://help.playcircl.com/', target: '_blank' },
  {
    title: 'Contact',
    link: `${process.env.SITE_URL}/live-chat`,
    target: '_blank',
  },
  {
    title: 'Download',
    // link: getLinkToStore(),
    target: '_blank',
  },
];

const Footer = () => {
  return (
    <S.Container>
      <div className="wrapper_center">
        <S.Content>
          <S.Background />

          <Logo />

          <S.Menu>
            {menuArr.map((item, index) => (
              <S.Item key={index}>
                <S.Link href={item.link} target={item.target}>
                  {item.title}
                </S.Link>
              </S.Item>
            ))}
          </S.Menu>
        </S.Content>

        <S.TermsContainer>
          <S.TermsList>
            <S.TermsItem>
              <a
                href={`${process.env.SITE_URL}/terms-and-conditions`}
                target="_blank"
              >
                Terms & Conditions
              </a>
            </S.TermsItem>
            <S.TermsItem>
              <a
                href={`${process.env.SITE_URL}/privacy-policy`}
                target="_blank"
              >
                Privacy Policy
              </a>
            </S.TermsItem>
            <S.TermsItem>
              <a href={`${process.env.SITE_URL}/rules-of-play`} target="_blank">
                Rules of Play
              </a>
            </S.TermsItem>
          </S.TermsList>

          <S.Socials>
            <S.SocialLink
              href="https://www.facebook.com/playcircl"
              target="_blank"
              rel="noreferrer"
              aria-label="Circl Facebook page"
            >
              <S.WhiteFacebook />
            </S.SocialLink>
            <S.SocialLink
              href="https://www.instagram.com/playcircl/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Circl Instagram page"
            >
              <S.WhiteInstagram />
            </S.SocialLink>
            <S.SocialLink
              href="https://twitter.com/PlayCircl"
              target="_blank"
              rel="noreferrer"
              aria-label="Circl Twitter page"
            >
              <S.WhiteTwitter />
            </S.SocialLink>
          </S.Socials>

          <S.ComplianceContainer>
            <S.ComplianceText>
              CIRCL. GAMING LTD is a company registered in England and Wales
              (No. 12520259).
            </S.ComplianceText>

            <S.ComplianceText>
              CIRCL. GAMING LTD is licensed and regulated in Great Britain by
              the Gambling Commission under account number{' '}
              <a href={'https://registers.gamblingcommission.gov.uk/57994'}>
                57994
              </a>
              .
            </S.ComplianceText>
          </S.ComplianceContainer>
        </S.TermsContainer>
      </div>
    </S.Container>
  );
};

export default Footer;
