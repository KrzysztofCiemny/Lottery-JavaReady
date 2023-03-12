import { t } from 'i18next';
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
          <div>{t('goBackAndDrawMessage')}</div>
        ) : (
          <ResultsContainer>
            {!isWinner ? (
              <h2>{t('noWinMessage')}</h2>
            ) : (
              <>
                <h2>{t('youWinMessage')}</h2>
                <p>{t('thanksToYouMessage')}</p>
              </>
            )}
            <ul>
              <li>
                {t('winningNumbersMessage')} {convertArray(winningNumbers)}
              </li>
              <li>
                {t('yourNumbersMessage')} {convertArray(typedNumbers)}
              </li>
              <li>
                {t('matchedNumbersMessage')} {convertArray(matchedNumbers)}
              </li>
            </ul>
          </ResultsContainer>
        )}
      </Card>
      <LinksContainer>
        <GoToLink to="/checkResults" isbacklink="true">
          <span>{'<'}</span> {t('checkResultsMessage')}
        </GoToLink>
      </LinksContainer>
    </>
  );
};
