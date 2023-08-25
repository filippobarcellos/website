import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  text-align: center;
`;

export const Content = styled.div`
  width: 100%;
  padding-top: 52px;
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

export const Title = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary.white};
  font-weight: 400;
  margin-bottom: 72px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 60px;
  background-color: ${({ theme }) => `${theme.colors.primary.white}16`};
`;

export const SubTitle = styled.p`
  font-size: clamp(1.2rem, 8vw - 2rem, 1.8rem);
  color: ${({ theme }) => theme.colors.primary.white};
`;

export const FAQContainer = styled.div`
  display: flex;
  margin-top: 72px;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 48px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  max-width: 30rem;
  width: 100%;
  gap: 16px;
  padding: 80px 0 0px 0px;
`;
