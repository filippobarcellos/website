import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FixtureContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const FixtureBlock = styled.div`
  p {
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.shades[50]};
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Fixture = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-size: 11px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.shades[50]};
    padding: 0 12px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.white};
    margin: 0;
  }
`;

export const TeamCircl = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const GoalIcon = styled.img`
  margin: 0px 18px -11px;
  width: 36px;
  height: 36px;
`;

const scroll = keyframes`
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-200px * 5))}
`;

export const Slider = styled.div`
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: ${scroll} 20s linear infinite;
    display: flex;
    width: calc(200px * 10);
  }
`;
