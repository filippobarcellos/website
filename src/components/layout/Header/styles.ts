import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  z-index: 99;
  padding: 20px 0px;
  backdrop-filter: blur(10px);
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.primary.dark : 'transparent'};
  position: ${({ isHomePage }) => (isHomePage ? 'fixed' : 'relative')};
  height: 80px;

  border-bottom: 1px solid
    ${({ theme, showBorder, isHomePage }) =>
      showBorder || !isHomePage
        ? `${theme.colors.primary.white}24`
        : 'transparent'};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-bottom: 1px solid ${({ theme }) => `${theme.colors.primary.white}24`};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  width: 100%;
`;

export const PlayButton = styled.div`
  position: absolute;
  width: 180px;

  left: 0;
  right: 0;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 160px;
    height: 40px;
    position: relative;
  }
`;

export const HeaderBackground = styled.div`
  max-width: 850px;
  height: 850px;
  background: #684317;
  opacity: 0.24;
  position: absolute;
  top: -200px;
  left: 50%;
  border-radius: 400px;
  z-index: 0;
  transform: translate(-50%, -50%);
  filter: blur(150px);
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  gap: 32px;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white.light[400]};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;

export const MenuMobile = styled.button`
  color: #ffffff;
  font-weight: 700;
  display: none;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`;
