import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  img {
    height: 33px;
    width: 33px;
  }
`;

export const LogoText = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.white};
  margin-left: 12px;
`;
