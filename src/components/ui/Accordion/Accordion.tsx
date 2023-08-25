import React, { ReactNode } from 'react';
import * as AccordionRadix from '@radix-ui/react-accordion';

import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown';

import * as S from './styles';

type Props = {
  title: string;
  body: ReactNode;
  index: number;
};

const Accordion = ({ title, body, index }: Props) => {
  return (
    <S.AccordionItem value={String(index)}>
      <S.Container>
        <AccordionRadix.Header>
          <S.AccordionTrigger>
            <span>{title}</span>
            <ChevronDown width={32} />
          </S.AccordionTrigger>
        </AccordionRadix.Header>
        <S.AccordionContent>{body}</S.AccordionContent>
      </S.Container>
    </S.AccordionItem>
  );
};

export default Accordion;
