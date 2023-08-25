import React from 'react';
import styled from 'styled-components';
// import Lottie from 'react-lottie-player';
// import LoaderLottie from '../../assets/animations/circl_loader.json';

const LottieContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
  }
`;

// const LottieImage = styled(Lottie)`
//   width: 50px;

//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     width: 50px;
//   }
// `;

const Loader = () => {
  return (
    <>
      <LottieContainer>
        {/* <LottieImage loop animationData={LoaderLottie} play /> */}
      </LottieContainer>
    </>
  );
};
export default Loader;
