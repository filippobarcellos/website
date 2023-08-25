import styled, { keyframes } from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const Container = styled.section`
  display: grid;
  justify-content: center;
  position: relative;

  width: 100%;
  text-align: center;
`;

export const Content = styled.div`
  width: 100%;

  flex: 1;
  padding-top: 124px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 36px;
  }
`;

export const SubTitle = styled.p`
  font-size: 24px;
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.primary.white};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  width: 100%;
  max-width: 55rem;
  overflow: hidden;
  border-radius: 24px;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
      48.09deg,
      rgba(199, 23, 255, 0.24) 0%,
      rgba(60, 7, 145, 0.24) 62.24%
    ),
    ${({ theme }) => `${theme.colors.purple.dark[1000]}60`};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: calc(100vw - 96px);
    margin: 0 auto;
    margin-top: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: calc(100vw - 48px);
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 72px;

  padding: 20px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    padding: 32px 12px;
    gap: 24px;
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WinnerImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    color: ${({ theme }) => theme.colors.primary.white};
    max-width: 300px;
    margin-bottom: 20px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  padding: 16px 0;
  gap: 32px;
  margin-top: auto;
  overflow: hidden;
  background: linear-gradient(
    48.09deg,
    rgba(199, 23, 255, 0.24) 0%,
    rgba(60, 7, 145, 0.24) 62.24%
  );
`;

export const Value = styled.p`
  font-size: 24px;
  font-weight: 700;
  background: ${({ theme }) =>
    `-webkit-linear-gradient(${theme.colors.gold.light[500]}, ${theme.colors.gold.light[50]})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.white};
`;

export const CustomSwiperSlide = styled(SwiperSlide)``;

export const Separator = styled.div`
  width: 1px;
  height: 60px;
  background-color: ${({ theme }) => `${theme.colors.primary.white}15`};
  margin-left: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 1px;
    width: 70%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const Winner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WinnerAvatarContainer = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.purple.dark[400]};
  padding: 1px;
  margin: 0px 12px;

  img {
    height: 38px;
    width: 38px;
    border-radius: 40px;
  }
`;

export const WinnerText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.white};
`;

export const TrustPilotImg = styled.img`
  width: 230px;
  height: 25px;
`;

export const GradientBackground = styled.div`
  max-width: 746px;
  width: 100%;
  height: 560px;
  background-color: #ffa439;

  opacity: 0.26;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  z-index: 0;
  transform: translate(-50%, -50%);
  filter: blur(150px);
`;

export const ImageBG = styled.div`
  width: 100%;
  height: 580px;
  background-image: url('/winners-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;

  position: absolute;
  overflow: hidden;
  right: 0;
  bottom: 60px;
  left: 0;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const scroll = keyframes`
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-180px * 6))}
`;

export const Slider = styled.div`
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: ${scroll} 20s linear infinite;
    display: flex;
    width: calc(200px * 12);
  }
`;

export const TrustPilotContainer = styled.div`
  margin: 20px 0 0 0;
`;
