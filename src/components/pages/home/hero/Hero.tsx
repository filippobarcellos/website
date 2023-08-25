import React, { useState } from 'react';
import Image from 'next/image';

// import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import Jackpot from '@/components/shared/Jackpot';
import RuleBook from '@/components/shared/RuleBook';
import TrustBox from '@/components/shared/TrustPilot/TrustPilot';
import GradientBackground from '@/components/ui/GradientBackground';

// import Offer from '../offer';
import { Routes } from '@/constants/routes';

// import { Segment } from 'utils/segment';

import theme from '@/styles/theme';
import * as S from './styles';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // const breakpoints = useBreakpoint();
  const isMobile = true;

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleOpenVideoModal() {
    setIsVideoModalOpen(true);
  }

  function handleCloseVideoModal() {
    setIsVideoModalOpen(false);
  }

  return (
    <>
      <S.Container>
        <div className="section_container">
          <S.TextContainer>
            <h1>
              <span>Five Match Millions</span>
            </h1>

            <p>
              The ‘Circl of Fortune’ game for football fans. Predict what the
              five winning numbers will be at Full Time to become a Five Match
              Millionaire! ⚽️
            </p>

            <S.TrustPilotContainer>
              <TrustBox width={'100%'} height={'52px'} />
            </S.TrustPilotContainer>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
              }}
            >
              <video
                style={{
                  maxWidth: 500,
                  width: '100%',
                  backgroundColor: theme.colors.shades[80],
                }}
                src={'/videos/explainer_vid.mp4#t=0.2'}
                controls
                preload="matadata"
                // onPlay={() => Segment.track('VideoPlayed', null)}
                poster={'./images/video_thumbnail.png'}
              />
            </div>

            <S.ButtonsContainer>
              <Button
                trackingTag="RegisterAndPlay"
                click={() => {
                  console.log(Routes.FMM);
                }}
              >
                Register and Play now
              </Button>
              <Button
                variant="secondary"
                trackingTag="MagicNumbers"
                click={handleOpenModal}
                showIcon={false}
              >
                What are the magic numbers?
              </Button>
            </S.ButtonsContainer>

            {isMobile && (
              <S.StoreButtons>
                <a href={process.env.APP_DOWNLOAD_LINK} target="_blank">
                  <Image
                    src="/images/apple_play_button.svg"
                    alt="circl play store"
                    width={100}
                    height={40}
                    // onClick={() => Segment.track('DownloadHero', null)}
                  />
                </a>
                <a href={process.env.APP_DOWNLOAD_LINK} target="_blank">
                  <Image
                    src="/images/google-play-badge.png"
                    alt="circl google store"
                    width={100}
                    height={40}
                    // onClick={() => Segment.track('DownloadHero', null)}
                  />
                </a>
              </S.StoreButtons>
            )}

            <S.OfferContainer style={{ paddingTop: isMobile ? 0 : 30 }}>
              {/* <Offer /> */}
            </S.OfferContainer>
          </S.TextContainer>

          <Modal
            isOpen={isVideoModalOpen}
            onRequestClose={handleCloseVideoModal}
            hideHeader={true}
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 22,
              paddingBottom: 22,
            }}
          >
            <div style={{ width: '100%', height: '90%' }}>
              <video
                src={'./videos/explainer_1.mp4'}
                height="100%"
                controls
                autoPlay={true}
              />
            </div>
          </Modal>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            headerText={'Great question!'}
          >
            <S.ModalTextContainer>
              <p>Well the truth is...even we don't know. Let's explain.</p>
              <br />
              <p>
                We use live action on the pitch to make the Circl spin, creating
                our very own football Circl of fortune!
              </p>
              <S.VideoContainer>
                <video autoPlay loop muted playsInline preload="auto">
                  <source src={'./videos/slide2.mp4'} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </S.VideoContainer>
              <p>
                For example, each time there is a 'Throw-in' the Circl spins 2
                places to the right, a 'Yellow Card' spins it 3 places to the
                left, a 'Goal' moves it 4 places to the right! Whatever number
                lands at the top at Full Time, is the winning number!
              </p>
              <br />
              <p>
                The only thing you have to do is try and predict which will be
                the winning number at Full Time for each fixture.
              </p>
              <br />
              <p>
                Check out our rule book below to see all the football actions we
                use to spin the Circl!
              </p>

              <S.ModalButtonContainer>
                <Button
                  style={{ maxWidth: isMobile ? '100%' : 228 }}
                  trackingTag="PlayNowExplainerDialog"
                  click={() => {
                    console.log(Routes.FMM);
                  }}
                >
                  Play now for £2
                </Button>
              </S.ModalButtonContainer>

              <RuleBook />

              <S.ModalButtonContainer>
                <Button
                  style={{ maxWidth: isMobile ? '100%' : 228 }}
                  trackingTag="PlayNowExplainerDialog"
                  click={() => {
                    console.log(Routes.FMM);
                  }}
                >
                  Play now for £2
                </Button>
              </S.ModalButtonContainer>
            </S.ModalTextContainer>
          </Modal>

          <S.JackpotContainer>
            <Jackpot />
          </S.JackpotContainer>

          <S.HeroImage />
        </div>
        <GradientBackground />
      </S.Container>
      <Divider variant="secondary" />
    </>
  );
};

export default Hero;
