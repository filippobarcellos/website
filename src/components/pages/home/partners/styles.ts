import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  text-align: center;
`;

export const Content = styled.div`
  width: 100%;
  z-index: 1;

  h3 {
    margin-bottom: 72px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  justify-content: center;

  max-width: 55rem;
  margin: 0 auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 48px;
  }
`;
