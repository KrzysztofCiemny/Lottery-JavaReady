import { t } from 'i18next';
import React, { useState } from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { ErrorMessage } from '../../components/ErrorMessage';
import { GoToLink } from '../../components/GoToLink';
import { PageHeader } from '../../components/PageHeader';
import { useApi } from '../../composables/useApi';
import {
  Container,
  Input,
  LinksContainer,
  NumbersDrawnMessage,
  NumbersLoadingMessage,
  WinningNumbersButton,
} from './CheckResultsPage.styles';

export const CheckResultsPage = () => {
  const [ticketId, setTicketId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { getResults, generateWinningNumbers, getRequestError, winningNumbersGenerated } =
    useApi();

  const drawWinningNumbers = () => {
    generateWinningNumbers();
    setIsLoading(true);
  };

  return (
    <>
      <PageHeader>
        <h2>{t('checkResultsMessage')}</h2>
        <p>
          {t('drawNumbers1Message')}&nbsp;
          <WinningNumbersButton
            role={Button}
            onClick={drawWinningNumbers}
            onKeyPress={drawWinningNumbers}
          >
            {t('drawNumbers2Message')}
          </WinningNumbersButton>
          &nbsp; {t('drawNumbers3Message')}
        </p>
        <NumbersLoadingMessage>
          {isLoading && !winningNumbersGenerated ? t('waitingMessage') : ''}
        </NumbersLoadingMessage>
        <NumbersDrawnMessage>
          {winningNumbersGenerated ? t('numbersDrawnMessage') : ''}
        </NumbersDrawnMessage>
      </PageHeader>
      <Card>
        <Container>
          <p>{t('insertIdMessage')}</p>
          <Input
            type="text"
            required
            onChange={(event) => setTicketId(event.target.value)}
          />

          <Button type="button" onClick={() => getResults(ticketId)}>
            {t('submitMessage')}
          </Button>
          <ErrorMessage>{getRequestError ? t('errorMessage') : ''}</ErrorMessage>
        </Container>
      </Card>
      <LinksContainer>
        <GoToLink to="/ticket" isbacklink="true">
          <span>{'<'}</span> {t('backToTicketMessage')}
        </GoToLink>
      </LinksContainer>
    </>
  );
};
