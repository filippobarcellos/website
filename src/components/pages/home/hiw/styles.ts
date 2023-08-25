import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  text-align: center;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  z-index: 1;

  h3 {
    margin-top: 32px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.5rem, 8vw - 2rem, 2rem);
  color: ${({ theme }) => theme.colors.primary.white};
  font-weight: 500;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.primary.white};
  max-width: 75%;
  font-size: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 95%;
    margin-top: 8px;
  }
`;

export const SliderWrapper = styled.div`
  max-width: 55rem;
  margin: 0 auto;
  margin-top: 48px;
  position: relative;
  height: 329px;

  @media (max-width: 1280px) {
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 0;
  }
`;

export const SliderTextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 220px;
    justify-content: center;
  }
`;

export const TimeLineRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row-reverse;
  justify-content: center;
  max-width: 30rem;
  gap: 16px;
  padding-top: clamp(16px, 8vw - 2rem, 80px);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    flex-direction: column;
  }
`;

export const GradientBackground = styled.div`
  width: 100%;
  height: 716px;
  background-color: #ffa439;

  filter: blur(225px);

  opacity: 0.06;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  z-index: 0;
  transform: translate(-50%, -50%);
`;

export const SliderProgress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 300px;
  margin: 0 auto;
  gap: 32px;
  margin-top: 42px;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 0;
  }
`;

export const SliderProgressItem = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid ${({ active }) => (active ? '#FFF053' : '#28263a')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary.dark : theme.colors.primary.white};
  background: ${({ theme, active }) =>
    `linear-gradient(75.72deg, ${active ? '#FFA439' : 'transparent'} 0%, ${
      active ? '#FFF053' : 'transparent'
    } 100%)`};

  &::after {
    width: 102px;
    height: 2px;
    content: '';
    position: absolute;
    background: ${({ theme, active }) =>
      `linear-gradient(75.72deg, ${active ? '#FFA439' : '#28263a'} 0%, ${
        active ? '#FFF053' : '#28263a'
      } 100%)`};
    box-shadow: 0px 0px 40px rgba(255, 164, 57, 0.16);
    left: -366%;
    z-index: 0;
  }

  &:first-child:after {
    content: none;
  }

  span {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    border: solid 2px ${({ theme }) => theme.colors.primary.gold};
    border-radius: 10px;
  }
`;
