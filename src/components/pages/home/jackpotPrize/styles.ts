import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  text-align: center;
  padding: 8rem 0px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1280px) {
    padding: 4rem 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 55rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 24px;
  }
`;

export const SubTitle = styled.p`
  font-size: 24px;
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.primary.white};
`;

export const Timeline = styled.div`
  width: 100%;
  max-width: 55rem;
  margin: 0 auto;
  margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const TimeLineRow = styled.div`
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  max-width: 100%;
  gap: 48px;
  margin-top: -16px;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`;

export const TimeLineBar = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.gold};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const TimeLineBarMobile = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 467px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.primary.gold};
    position: absolute;
    left: 24px;
  }
`;

export const Jackpot = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  position: relative;

  > div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 175px;
    flex-direction: row;
    align-self: flex-start;
  }
`;

export const JackpotText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white.light[400]};
  text-align: left;
`;

type ValueProps = {
  maxJackpot: boolean;
};
export const JackpotValue = styled.span<ValueProps>`
  font-size: clamp(2rem, 8vw - 2rem, 2rem);
  font-weight: 700;
  color: ${({ theme, maxJackpot }) =>
    maxJackpot ? theme.colors.gold.light[100] : theme.colors.primary.white};
  text-align: left;
`;

export const JackpotCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.gold};
  margin-bottom: 16px;

  align-items: center;
  justify-content: center;
  display: flex;

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 48px;
    height: 48px;
    margin-right: 24px;

    span {
      font-size: 22px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  padding: 80px 0 0px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
    padding: 48px 1.5rem 0 1.5rem;
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

export const PrizeInfo = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary.white};
  margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 1.5rem;
  }
`;

export const ImageBG = styled.div`
  width: 100%;
  height: 580px;
  background-image: url('/jackpot-prize-bg.png');
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
