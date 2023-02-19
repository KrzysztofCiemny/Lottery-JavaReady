import React from 'react';

import { Card } from '../components/Card';
import { useApi } from '../composables/useApi';

export const ResultsPage = () => {
  const { lotteryResults } = useApi();

  return (
    <>
      <Card>
        <h2>Lottery results</h2>
        {lotteryResults.isWinner == false ? (
          <h2>You are not a winner</h2>
        ) : (
          <h2>You are a winner</h2>
        )}
        <ul>
          <li>Winning numbers: {lotteryResults.winningNumbers}</li>
          <li>Your numbers: {lotteryResults.typedNumbers}</li>
          <li>Matched numbers: {lotteryResults.matchedNumbers}</li>
        </ul>
      </Card>
    </>
  );
};
