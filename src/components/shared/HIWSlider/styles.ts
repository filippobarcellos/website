import styled from 'styled-components';

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 24px 24px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 24px;
  }
`;

export const Container = styled.section`
  width: 100%;
  text-align: center;
  position: relative;
`;

export const Content = styled.div`
  padding: 0 24px;
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
  white-space: pre-line;

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

  @media (max-width: 1280px) {
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 0;
    max-width: 100%;
  }
`;

export const SliderTextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  h3 {
    margin-top: 0;
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TimeLineRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  max-width: 30rem;
  gap: 16px;
  padding-top: clamp(48px, 8vw - 2rem, 80px);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
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
  max-width: 200px;
  margin: 30px auto;
  gap: 16px;
  z-index: 9999999;
`;

export const SliderProgressItem = styled.div`
  flex: ${({ active }) => (active ? 2 : 1)};
  height: 2px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.gold : theme.colors.primary.white};
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
