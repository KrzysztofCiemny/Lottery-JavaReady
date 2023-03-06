import React from 'react';

import { Card } from '../../components/Card';
import { GoToLink } from '../../components/GoToLink';
import { useApi } from '../../composables/useApi';
import { LinksContainer, ResultsContainer } from './ResultsPage.styles';

export const ResultsPage = () => {
  const {
    lotteryResults: { isWinner, matchedNumbers, typedNumbers, winningNumbers },
  } = useApi();

  const convertArray = (arr: number[]) => {
    if (!arr) return;
    else return arr.join(', ');
  };

  return (
    <>
      <Card>
        {winningNumbers == null ? (
          <div>Go back and draw numbers or wait till Saturday</div>
        ) : (
          <ResultsContainer>
            {!isWinner ? (
              <h2>Unfortunately, you didn&apos;t win :(</h2>
            ) : (
              <>
                <h2>You win the lottery!</h2>
                <p>Thanks to you, animals will live well :)</p>
              </>
            )}
            <ul>
              <li>Winning numbers: {convertArray(winningNumbers)}</li>
              <li>Your numbers: {convertArray(typedNumbers)}</li>
              <li>Matched numbers: {convertArray(matchedNumbers)}</li>
            </ul>
          </ResultsContainer>
        )}
      </Card>
      <LinksContainer>
        <GoToLink to="/checkResults" isbacklink="true">
          <span>{'<'}</span> Check results
        </GoToLink>
      </LinksContainer>
    </>
  );
};
