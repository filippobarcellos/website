import styled, { keyframes } from 'styled-components';

import * as Accordion from '@radix-ui/react-accordion';

const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`;

const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;

export const AccordionTrigger = styled(Accordion.Trigger)`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 16px;
  width: 100%;
  justify-content: space-between;
  color: white;

  span {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 16px;
    }
  }

  &[data-state='open'] {
    svg {
      transform: rotate(180deg);
    }
  }

  svg {
    transition: transform 50ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

export const AccordionItem = styled(Accordion.Item)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 1px;
  background-image: linear-gradient(48.09deg, #c717ff 0%, #3c0791 62.24%);
`;

export const AccordionContent = styled(Accordion.Content)`
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white.light[300]};
    text-align: left;
    margin-bottom: 16px;
    padding: 0 16px;
  }

  button {
    margin-left: 16px;
    margin-bottom: 16px;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  background-image: linear-gradient(
    48.09deg,
    rgba(199, 23, 255, 0.24) 0%,
    rgba(60, 7, 145, 0.24) 62.24%
  );
  width: 100%;
  border-radius: 8px;
`;
