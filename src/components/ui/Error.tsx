import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie-player';
import FailLottie from '../../assets/animations/fail.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  strong {
    color: white;
    font-size: 22px;
    margin-top: 8px;
  }

  span {
    color: white;
    font-size: 16px;
    margin-top: 16px;
  }
`;

const LottieContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
  }
`;

const LottieImage = styled(Lottie)`
  width: 200px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 200px;
  }
`;

type ErrorProps = {
  message?: string;
};

const Error = ({ message }: ErrorProps) => {
  return (
    <Container>
      <LottieContainer>
        <LottieImage loop animationData={FailLottie} play />
      </LottieContainer>
      <strong>Something went wrong</strong>
      <span>{message}</span>
    </Container>
  );
};
export default Error;
