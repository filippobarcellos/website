import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const SubTitle = styled.p`
  font-size: clamp(1.2rem, 8vw - 2rem, 1.8rem);
  color: ${({ theme }) => theme.colors.primary.white};
  text-align: center;
`;

export const JackpotContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 3;
  padding-top: 52px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 24px;
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
  left: 0;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const HeroGradientBackground = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  z-index: 0;

  position: absolute;
  overflow: hidden;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroGradientBg = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 100%;
  border-radius: 50%;
  background: #20044e;
  filter: blur(150px);
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: -800px;
  position: absolute;
  margin: 0 auto;
`;

export const HeroGradientBgSmall = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 100%;
  border-radius: 50%;
  background: #20044e;
  height: 450px;
  background: #530ac7;
  filter: blur(150px);

  left: 0;
  right: 0;
  bottom: -300px;
  position: absolute;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  padding-top: 52px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 55rem;
  margin: 0 auto;

  > h3 {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 24px;
  }
`;
