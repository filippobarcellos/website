import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.purple.dark[700]};
  width: 100%;
  max-width: 456px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => `${theme.colors.primary.white}18`};
`;

export const Header = styled.div`
  padding: 22px 0px;
  text-align: center;
  background-color: ${({ theme }) => `${theme.colors.primary.white}08`};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 16px 0px;
  }
`;

export const FixtureSliderContainer = styled.div`
  padding-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 24px;
  }
`;

export const Body = styled.div`
  text-align: center;

  > span {
    font-size: clamp(2.5rem, 8vw - 2rem, 3rem);
    font-weight: 900;
    background: ${({ theme }) =>
      `-webkit-linear-gradient(${theme.colors.gold.light[500]}, ${theme.colors.gold.light[50]})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > p {
    font-size: clamp(0.8rem, 8vw - 2rem, 1.2rem);
    color: ${({ theme }) => theme.colors.primary.white};
    margin-top: 12px;
  }
`;

export const ButtonContainer = styled.div`
  padding: 44px 32px 0px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 32px 24px 0px 24px;
  }
`;

export const Title = styled.h3`
  font-size: clamp(1rem, 8vw - 2rem, 1.2rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.white};
`;

export const Subtitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.primary.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 24px;
  }
`;

export const Countdown = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.white};
  padding: 22px 0px 32px 0px;

  span {
    color: ${({ theme }) => `${theme.colors.primary.white}56`};
    margin-left: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 8px 0px 24px 0px;
  }
`;
