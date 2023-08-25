import styled from 'styled-components';
import {
  SlSocialFacebook as Facebook,
  SlSocialTwitter as Twitter,
  SlSocialInstagram as Instagram,
} from 'react-icons/sl';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 40px 0px;
  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Background = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  position: absolute;
  top: -400px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  pointer-events: none;
  background: #20044e;
  opacity: 0.48;
  filter: blur(150px);
`;

export const Menu = styled.ul`
  display: flex;
  gap: 48px;
  flex-direction: row;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
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

export const TermsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 52px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    align-items: flex-start;
    margin-top: 42px;
  }
`;

export const TermsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 16px;
    margin-top: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

export const TermsItem = styled.li`
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: 16px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;

export const ComplianceText = styled.p`
  color: ${({ theme }) => theme.colors.primary.white};
  text-align: right;
  font-size: 16px;

  a {
    color: white;
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 3;
    text-align: start;
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const ComplianceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  grid-column: span 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 0;
    margin: 12px 0;
    order: 1;
  }
`;

export const SocialLink = styled.a``;

export const WhiteFacebook = styled(Facebook)`
  color: ${({ theme }) => theme.colors.primary.white};
  height: 30px;
`;

export const WhiteInstagram = styled(Instagram)`
  color: ${({ theme }) => theme.colors.primary.white};
  height: 30px;
`;

export const WhiteTwitter = styled(Twitter)`
  color: ${({ theme }) => theme.colors.primary.white};
  height: 30px;
`;
