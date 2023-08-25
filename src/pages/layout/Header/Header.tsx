import React, { useState } from 'react';
import { useCycle, motion } from 'framer-motion';
// import { useLocation } from '@reach/router';
// import { navigate } from 'gatsby';

import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import Menu from '@/components/Menu';

// import { getLinkToStore } from 'utils/navigation';

import * as S from './styles';
// import { useScrollPosition } from 'hooks/useScrollPosition';
import { Routes } from '@/constants/routes';
// import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import MenuButton from './MenuToggle';

const menuArr = [
  { title: 'Home', link: process.env.SITE_URL },
  { title: 'FAQ', link: 'https://help.playcircl.com/', target: '_blank' },
  {
    title: 'Contact',
    link: `${process.env.SITE_URL}/live-chat`,
    target: '_blank',
  },
];

const Header = () => {
  // const [open, setIsOpen] = useCycle(false, true);
  const [open, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // const location = useLocation();
  // const breakpoints = useBreakpoint();

  const isMobile = true;
  const isHomePage = true;
  // const isHomePage = location.pathname === '/';
  const showPlayButton = isHomePage && scroll;

  const showPlayButtonSmallScreen = showPlayButton && isMobile;

  // useScrollPosition(
  //   function setScrollPosition({ currentPosition }) {
  //     const isShow = currentPosition.y < -100;

  //     if (isShow !== scroll) setScroll(isShow);
  //   },
  //   [scroll],
  //   false,
  //   false,
  //   300
  // );

  function navigateToDownload() {
    // const url = getLinkToStore();
    return window.location.replace(url);
  }

  const BaseMenu = () => (
    <S.Menu>
      {menuArr.map((item, index) => (
        <S.Item key={index}>
          <S.Link href={item.link} target={item.target}>
            {item.title}
          </S.Link>
        </S.Item>
      ))}

      {isMobile && (
        <S.Item>
          <Button
            click={navigateToDownload}
            trackingTag={'DownloadHeader'}
            style={{ width: 195 }}
            icon="/icons/download.svg"
          >
            Download
          </Button>
        </S.Item>
      )}
    </S.Menu>
  );

  const MenuMobile = () => {
    return <MenuButton isOpen={open} onClick={() => setIsOpen()} />;
  };

  return (
    <>
      <S.Container
        showBorder={showPlayButton}
        isHomePage={isHomePage}
        isOpen={open}
      >
        <div className="wrapper_center">
          <S.Content>
            <S.HeaderBackground />

            <Logo hideText={showPlayButtonSmallScreen} />

            {showPlayButton && (
              <S.PlayButton>
                <Button
                  trackingTag="PlayNowHeader"
                  click={() => {
                    navigate(Routes.FMM);
                  }}
                >
                  Play now
                </Button>
              </S.PlayButton>
            )}

            {isMobile ? <MenuMobile /> : <BaseMenu />}
          </S.Content>
        </div>
        {/* <Menu open={open} cycleOpen={setIsOpen} /> */}
      </S.Container>
    </>
  );
};

export default Header;
