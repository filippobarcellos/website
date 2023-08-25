import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-bottom: 400px;
`;

export const TextContainer = styled.div`
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
  margin-top: 0rem;
  padding-bottom: 200px;

  h1 {
    font-size: clamp(2.5rem, 8vw - 2rem, 4rem);
    color: ${({ theme }) => theme.colors.primary.white};

    span {
      background: ${({ theme }) =>
        `-webkit-linear-gradient(${theme.colors.gold.light[500]}, ${theme.colors.gold.light[50]})`};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    font-size: clamp(1rem, 8vw - 2rem, 1.8rem);
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.primary.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 0rem;
    max-width: 100%;
    padding: 0rem 0 2rem 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 0px 1.5rem 0px 1.5rem;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
    padding: 0;
  }
`;

export const JackpotContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6rem;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0px 1.5rem;
    bottom: -1rem;
  }
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 580px;
  background-image: url('/images/hero_img.png');
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  position: absolute;
  overflow: hidden;
  right: 0;
  bottom: 140px;
  left: 0;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const ModalTextContainer = styled.p`
  color: ${({ theme }) => theme.colors.primary.white};
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  video {
    max-width: 15rem;
    border: solid 2px ${({ theme }) => theme.colors.primary.gold};
    border-radius: 10px;
  }
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const TrustPilotContainer = styled.div`
  margin: 20px 0 0 0;
`;

export const OfferContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StoreButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 32px 0;
  align-items: center;
  justify-content: center;

  img {
    height: 50px;
  }
`;
