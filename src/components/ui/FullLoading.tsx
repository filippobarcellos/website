import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie-player';
import LoaderLottie from '../../assets/animations/circl_loader.json';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #1e1e1e50;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  backdrop-filter: blur(5px);
`;

const LottieContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
  }
`;

const LottieImage = styled(Lottie)`
  width: 10%;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 50%;
  }
`;

const FullScreenLoading = () => {
  return (
    <Container>
      <LottieContainer>
        <LottieImage loop animationData={LoaderLottie} play />
      </LottieContainer>
    </Container>
  );
};
export default FullScreenLoading;
