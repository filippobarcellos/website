import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, motion } from 'framer-motion';
// import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Close } from '@styled-icons/ionicons-outline/Close';

import GradientText from '@/components/ui/GradientText/GradientText';

import 'swiper/css';
import 'swiper/css/navigation';

import * as S from './styles';
import RuleBook from '../RuleBook/RuleBook';

const slides = [0, 1, 2];

type HowItWorksModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const HowItWorks = ({ isOpen, onRequestClose }: HowItWorksModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const breakpoints = useBreakpoint();
  const isMobile = false;

  function getText() {
    switch (activeIndex) {
      case 0:
        return {
          title: 'Pick your five match numbers',
          text: 'Choose your five numbers, one for each of the five football fixtures we have selected. You must try and predict which will be the winning numbers at Full Time! \nSwipe left for more 😉',
        };
      case 1:
        return {
          title: 'Sit back & enjoy the football',
          text: 'We use live action on the pitch to make the Circl spin, creating our very own football wheel of fortune\n\nFor example, each time there is a ‘Throw-in’ the Circl spins 2 places to the left, a ‘Yellow card’ spins it 3 places to the right, a ‘Goal’ spins it 4 places to the left! Whatever number lands at the top at Full Time, is the winning number!\n\nCheck out our rule book below to see all the football moments we use to power the Circl.',
        };
      case 2:
        return {
          title: 'Match the numbers & win',
          text: 'If you match all five of the winning numbers, you will win £1,000,000! But you only need to match ONE number to win a cash prize! Good luck!',
        };
    }
  }

  const SliderProgress = () => (
    <S.SliderProgress>
      {slides.map((slide, index) => (
        <S.SliderProgressItem key={slide} active={activeIndex === index} />
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
        {activeIndex === 1 ? (
          <RuleBook style={{ width: '100%', margin: '0 auto' }} />
        ) : null}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      preventScroll={false}
      ariaHideApp={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#1E1E1E50',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(5px)',
        },
        content: {
          top: '50%',
          maxWidth: isMobile ? '90%' : '70%',
          height: isMobile ? '95%' : '90%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          padding: 0,
          borderRadius: 24,
          borderColor: 'transparent',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#27075B',
        },
      }}
    >
      <S.Header>
        <GradientText>How to play</GradientText>
        <S.CloseButton onClick={onRequestClose}>
          <Close color="white" height={30} />
        </S.CloseButton>
      </S.Header>

      <S.SliderWrapper>
        <Swiper
          navigation={isMobile ? false : true}
          modules={!isMobile ? [Navigation] : undefined}
          spaceBetween={isMobile ? 0 : 50}
          slidesPerView={1}
          onSlideChangeTransitionEnd={({ activeIndex }) =>
            setActiveIndex(activeIndex)
          }
        >
          <SwiperSlide>
            <S.Slide>
              <S.VideoContainer>
                <video
                  height="300px"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
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
            </S.Slide>
          </SwiperSlide>
          <SwiperSlide>
            <S.Slide>
              <S.VideoContainer>
                <video
                  height="300px"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
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
            </S.Slide>
          </SwiperSlide>
          <SwiperSlide>
            <S.Slide>
              <S.VideoContainer>
                <video
                  height="300px"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
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
            </S.Slide>
          </SwiperSlide>
        </Swiper>
      </S.SliderWrapper>

      <S.Content>
        <SliderProgress />
        <SliderInfo />
      </S.Content>
    </ReactModal>
  );
};

export default HowItWorks;
