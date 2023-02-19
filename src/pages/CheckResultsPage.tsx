import React, { useState } from 'react';

import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { PageHeader } from '../components/PageHeader';
import { useApi } from '../composables/useApi';
import { FormContainer, Input } from './CheckResultsPage.styles';

export const CheckResultsPage = () => {
  const [ticketId, setTicketId] = useState('');
  const { getResults, generateWinningNumbers } = useApi();

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
          wait until Saturday, just draw the winning numbers now!
        </p>
        <p>Insert your ticket ID and click submit</p>
      </PageHeader>
      <Card>
        <FormContainer onSubmit={handleSubmit}>
          <Button type="button" onClick={drawWinningNumbers}>
            Draw the winning numbers
          </Button>
          <Input
            type="text"
            required
            onChange={(event) => setTicketId(event.target.value)}
          />
          <Button type="submit">Submit</Button>
        </FormContainer>
      </Card>
    </>
  );
};
