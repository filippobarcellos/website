import React from 'react';

import * as S from './styles';

const ruleBookRight = [
  {
    title: 'Corner',
    move: '1',
    icon: '/icons/corner.svg',
  },
  {
    title: 'Goal Kick',
    move: '3',
    icon: '/icons/goal-kick.svg',
  },
  {
    title: 'Goal',
    move: '4',
    icon: '/icons/futbol.svg',
  },
  {
    title: 'Free kick',
    move: '2',
    icon: '/icons/freekick.svg',
  },
  {
    title: 'Throw in',
    move: '2',
    icon: '/icons/throw-in.svg',
  },
];

const ruleBookLeft = [
  {
    title: 'Substitute',
    move: '1',
    icon: '/icons/sub.svg',
  },
  {
    title: 'Yellow card',
    move: '3',
    icon: '/icons/yellowcard.svg',
  },
  {
    title: 'Red card',
    move: '6',
    icon: '/icons/redcard.svg',
  },
];

type RuleBookProps = {
  style?: React.CSSProperties;
};

const RuleBook = ({ style }: RuleBookProps) => {
  return (
    <S.RuleBookContainer style={style}>
      <S.RuleBookSection>
        <S.RuleBookTitle>Circl spins right</S.RuleBookTitle>
        {ruleBookRight.map((item, index) => (
          <S.RuleBookItem
            key={index}
            isLast={index === ruleBookRight.length - 1}
          >
            <img src={item.icon} width={32} />
            <S.RuleBookItemText>{item.title}</S.RuleBookItemText>
            <S.RuleBookItemMove>
              <span>Circl spins right +{item.move}</span>
            </S.RuleBookItemMove>
          </S.RuleBookItem>
        ))}
      </S.RuleBookSection>

      <S.RuleBookSection>
        <S.RuleBookTitle>Circl spins left</S.RuleBookTitle>

        {ruleBookLeft.map((item, index) => (
          <S.RuleBookItem
            key={index}
            isLast={index === ruleBookLeft.length - 1}
          >
            <img src={item.icon} />
            <S.RuleBookItemText>{item.title}</S.RuleBookItemText>
            <S.RuleBookItemMove>
              <span>Circl spins left -{item.move}</span>
            </S.RuleBookItemMove>
          </S.RuleBookItem>
        ))}
      </S.RuleBookSection>
    </S.RuleBookContainer>
  );
};

export default RuleBook;
