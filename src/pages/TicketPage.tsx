import React from 'react';

import { Card } from '../components/Card';
import { useApi } from '../composables/useApi';
import { TicketContainer } from './TicketPage.styles';

export const TicketPage = () => {
  const { ticket } = useApi();

  return (
    <>
      <Card>
        <TicketContainer>
          <h2>Lottery ticket</h2>
          <ul>
            <li>ID: {ticket.uuid}</li>
            <li>Created: {ticket.creationDateTime}</li>
            <li>Drawed: {ticket.drawDateTime}</li>
            <li>Expires: {ticket.expirationDateTime}</li>
            <li>Status: {ticket.status}</li>
          </ul>
        </TicketContainer>
      </Card>
    </>
  );
};
