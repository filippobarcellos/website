import styled from 'styled-components';

type CheckedStyle = {
  isChecked: boolean;
  size: 'small' | 'medium';
};

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div<CheckedStyle>`
  background-color: #0a012a;
  border-radius: 8px;
  padding: ${({ size }) => (size === 'small' ? 16 : 24)}px;
  border: 1px solid #130252;
  box-shadow: 0px 18px 22px rgba(0, 0, 0, 0.11);

  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
    transition: background-image 0.5s;
  }

  ${({ isChecked }) =>
    isChecked &&
    `
    background: radial-gradient(
        150.39% 100% at 50% 100%,
        rgba(165, 108, 255, 0.35) 0%,
        rgba(165, 108, 255, 0) 100%
      ),
      #2e008f;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    margin-left: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.white};
  margin-left: 12px;
`;

export const Value = styled.p`
  font-size: 18px;
  font-weight: 400px;
  color: ${({ theme }) => theme.colors.primary.white};
  margin-right: 12px;
`;

export const RadioButton = styled.div<CheckedStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #130252;

  ${({ isChecked, theme }) =>
    isChecked &&
    `
    background-color: ${theme.colors.primary.gold};
    border-color: transparent;
  `}
`;

export const MostPopularLabel = styled.div`
  width: 100%;
  text-align: center;
  border-top-left-radius: 8px;

  border-top-right-radius: 8px;
  background: ${({ theme }) => theme.colors.purple.gradients[4]};
  padding: 1px;

  margin-bottom: -22px;

  > div {
    padding: 8px 16px 28px 16px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: linear-gradient(
        48.09deg,
        rgba(199, 23, 255, 0.24) 0%,
        rgba(60, 7, 145, 0.24) 62.24%
      ),
      ${({ theme }) => theme.colors.primary.dark};
  }

  span {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    background: ${({ theme }) =>
      `-webkit-linear-gradient(${theme.colors.gold.light[500]}, ${theme.colors.gold.light[50]})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
