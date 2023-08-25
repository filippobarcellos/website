import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
// import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import RuleBook from '@/components/shared/RuleBook';
import GradientText from '@/components/ui/GradientText/GradientText';

import { Routes } from '@/constants/routes';

import 'swiper/css';
import 'swiper/css/navigation';

import * as S from './styles';

const slides = [0, 1, 2];

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // const breakpoints = useBreakpoint();
  const isMobile = false;

  function getText() {
    switch (activeIndex) {
      case 0:
        return {
          title: 'Pick your five match numbers',
          text: 'Choose your five numbers, one for each of the five football fixtures we have selected. You must try and predict which will be the winning numbers at Full Time! Swipe left for more 😉',
        };
      case 1:
        return {
          title: 'Sit back & enjoy the football',
          text: 'We use live action on the pitch to make the Circl spin, check out our ‘Rule Book’ below to see all the football moments we use to power the Circl. Whatever number lands at the top at Full Time, is the winning number!',
        };
      case 2:
        return {
          title: 'Match the numbers & win',
          text: 'If you match all five of the winning numbers, you will win £1,000,000! But you only need to match ONE number to win a cash prize! Good luck!',
        };
    }
  }

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

  const SliderProgress = ({ style }) => (
    <S.SliderProgress style={style}>
      {slides.map((slide, index) => (
        <S.SliderProgressItem key={slide} active={activeIndex >= index}>
          <span>{index + 1}</span>
        </S.SliderProgressItem>
      ))}
    </S.SliderProgress>
  );

  const SliderInfo = () => (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={String(activeIndex)}
        initial={{ opacity: 0 }}
        animate={{ transition: { duration: 0.7 }, opacity: 1 }}
        exit={{ transition: { duration: 0.5 }, opacity: 0 }}
      >
        <S.SliderTextContainer>
          <GradientText>{getText().title}</GradientText>

          <S.SubTitle>{getText().text}</S.SubTitle>
        </S.SliderTextContainer>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      <S.Container>
        <S.GradientBackground />
        <div className="section_container full">
          <S.Content id="how_to_play">
            <GradientText>How to play</GradientText>

            {isMobile && <SliderInfo />}

            <SliderProgress />

            <S.SliderWrapper>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={isMobile ? 0 : 50}
                slidesPerView={1}
                cssMode={true}
                onActiveIndexChange={({ activeIndex }) =>
                  setActiveIndex(activeIndex)
                }
              >
                <SwiperSlide>
                  <S.VideoContainer>
                    <video
                      height="300px"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                      poster={
                        isMobile
                          ? './images/slider/mobile/slider_1.webp'
                          : './images/slider/slider_1.webp'
                      }
                    >
                      <source src={'/videos/slide1.mp4'} type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
                  </S.VideoContainer>
                </SwiperSlide>
                <SwiperSlide>
                  <S.VideoContainer>
                    <video
                      height="300px"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                      poster={
                        isMobile
                          ? './images/slider/mobile/slider_2.webp'
                          : './images/slider/slider_2.webp'
                      }
                    >
                      <source src={'/videos/slide2.mp4'} type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
                  </S.VideoContainer>
                </SwiperSlide>
                <SwiperSlide>
                  <S.VideoContainer>
                    <video
                      height="300px"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                      poster={
                        isMobile
                          ? './images/slider/mobile/slider_3.webp'
                          : './images/slider/slider_3.webp'
                      }
                    >
                      <source src={'/videos/slide3.mp4'} type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
                  </S.VideoContainer>
                </SwiperSlide>
              </Swiper>
            </S.SliderWrapper>

            {!isMobile && <SliderInfo />}

            <S.Buttons>
              {activeIndex === 1 ? (
                <Button variant="secondary" onClick={handleOpenModal}>
                  Rule book
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  trackingTag="VideoExplainer"
                  click={handleOpenVideoModal}
                >
                  Video explainer
                </Button>
              )}

              <Button
                style={{ maxWidth: isMobile ? '100%' : 228 }}
                trackingTag="PlayNow3"
                click={() => {
                  console.log(Routes.FMM);
                }}
              >
                Play now for £2
              </Button>
            </S.Buttons>
          </S.Content>
        </div>
      </S.Container>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        subHeaderText={
          'Below is the list of football actions we use to make the Circl spin. We have calculated how much the circl spins for each football action based on the frequency of it happening.'
        }
      >
        <RuleBook />
      </Modal>

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
    </>
  );
};

export default HowItWorks;
