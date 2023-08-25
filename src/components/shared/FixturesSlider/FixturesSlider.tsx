import React from 'react';

import TeamIndicator from '../TeamIndicator';
import * as S from './styles';

const FixturesSlider = ({ circls }) => {
  return (
    <S.Container>
      <S.Slider>
        <div className="slide-track">
          {circls.map((item, index) => (
            <S.FixtureContainer key={index}>
              <S.FixtureBlock>
                <span>
                  <p>Game {index + 1}</p>
                </span>
                <S.Fixture>
                  <p style={{ marginRight: 6 }}>{item.homeCode}</p>
                  <TeamIndicator
                    colors={[item.homePrimary, item.homeSecondary]}
                  />
                  <span>VS</span>
                  <TeamIndicator
                    colors={[item.awayPrimary, item.awaySecondary]}
                  />
                  <p style={{ marginLeft: 6 }}>{item.awayCode}</p>
                </S.Fixture>
              </S.FixtureBlock>
              <div>
                <S.GoalIcon src={'/images/goal.png'} alt="goal icon" />
              </div>
            </S.FixtureContainer>
          ))}

          {circls.map((item, index) => (
            <S.FixtureContainer key={index}>
              <S.FixtureBlock>
                <span>
                  <p>Game {index + 1}</p>
                </span>
                <S.Fixture>
                  <p style={{ marginRight: 6 }}>{item.homeCode}</p>
                  <TeamIndicator
                    colors={[item.homePrimary, item.homeSecondary]}
                  />
                  <span>VS</span>
                  <TeamIndicator
                    colors={[item.awayPrimary, item.awaySecondary]}
                  />
                  <p style={{ marginLeft: 6 }}>{item.awayCode}</p>
                </S.Fixture>
              </S.FixtureBlock>
              <div>
                <S.GoalIcon src={'/images/goal.png'} alt="goal icon" />
              </div>
            </S.FixtureContainer>
          ))}
        </div>
      </S.Slider>
    </S.Container>
  );
};

export default FixturesSlider;
