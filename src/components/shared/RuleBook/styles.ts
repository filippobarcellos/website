import styled from 'styled-components';

export const RuleBookContainer = styled.div`
  max-width: 800px;
`;

export const RuleBookSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const RuleBookTitle = styled.h4`
  font-weight: 500;
  font-size: 13px;
  color: ${({ theme }) => `${theme.colors.primary.white}56`};
  text-transform: uppercase;
`;

type RuleBookItemProps = {
  isLast: boolean;
};

export const RuleBookItem = styled.div<RuleBookItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 0;
  border-bottom: ${({ isLast }) => (isLast ? 0 : 1)}px solid
    ${({ theme }) => `${theme.colors.primary.white}16`};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 16px 0;
  }
`;

export const RuleBookItemText = styled.p`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.primary.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 8px;
  }
`;

export const RuleBookItemMove = styled.div`
  margin-left: auto;
  padding: 8px 6px;
  border-radius: 4px;
  background-color: ${({ theme }) => `${theme.colors.primary.white}12`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary.white}56`};
  width: 180px;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.primary.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 120px;
    span {
      font-size: 13px;
    }
  }
`;
