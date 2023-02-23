import React, { useState } from 'react';

import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ErrorMessage } from '../components/ErrorMessage';
import { GoToLink } from '../components/GoToLink';
import { PageHeader } from '../components/PageHeader';
import { useApi } from '../composables/useApi';
import {
  FormContainer,
  Input,
  LinksContainer,
  NumbersDrawnMessage,
  WinningNumbersButton,
} from './CheckResultsPage.styles';

export const CheckResultsPage = () => {
  const [ticketId, setTicketId] = useState('');
  const { getResults, generateWinningNumbers, getRequestError, winningNumbersGenerated } =
    useApi();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getResults(ticketId);
  };

  const drawWinningNumbers = () => {
    generateWinningNumbers();
  };

  return (
    <>
      <PageHeader>
        <h2>Check results</h2>
        <p>
          Winning numbers are drawn every Saturday. However, if you don&apos;t want to
          wait until Saturday, just&nbsp;
          <WinningNumbersButton
            role={Button}
            onClick={drawWinningNumbers}
            onKeyPress={drawWinningNumbers}
          >
            draw&nbsp;the&nbsp;winning&nbsp;numbers
          </WinningNumbersButton>
          &nbsp; now!
        </p>
        <NumbersDrawnMessage>
          {winningNumbersGenerated ? 'Numbers have been drawn!' : ''}
        </NumbersDrawnMessage>
      </PageHeader>
      <Card>
        <FormContainer onSubmit={handleSubmit}>
          <p>Insert your ticket id:</p>
          <Input
            type="text"
            required
            onChange={(event) => setTicketId(event.target.value)}
          />

          <Button type="submit">Submit</Button>
          <ErrorMessage>
            {getRequestError
              ? 'Something went wrong. Please try again or refresh the page'
              : ''}
          </ErrorMessage>
        </FormContainer>
      </Card>
      <LinksContainer>
        <GoToLink to="/ticket" isbacklink="true">
          <span>{'<'}</span> Back to ticket
        </GoToLink>
      </LinksContainer>
    </>
  );
};
