import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Card } from '../../components/Card';
import { GoToLink } from '../../components/GoToLink';
import { useApi } from '../../composables/useApi';
import { LinksContainer, TicketContainer } from './TicketPage.styles';

export const TicketPage = () => {
  const [isCopied, setIsCopied] = useState(false);
  const {
    ticket: { creationDateTime, expirationDateTime, status, uuid },
  } = useApi();

  const convertDate = (date: string) => {
    if (!date) return;
    else return date.replace('T', ' ').replace('Z', '').split('.').shift();
  };

  return (
    <>
      <Card>
        <TicketContainer>
          <h2>Lottery ticket</h2>
          <div>
            <p>Copy the ticket ID by clicking on it</p>
            {isCopied ? <span>Copied ✓</span> : null}
          </div>
          <ul>
            <li>
              ID:&nbsp;
              <CopyToClipboard text={uuid} onCopy={() => setIsCopied(true)}>
                <span style={{ cursor: 'pointer' }}>{uuid}</span>
              </CopyToClipboard>
            </li>
            <li>Created: {convertDate(creationDateTime)}</li>
            <li>Expires: {convertDate(expirationDateTime)}</li>
            <li>Status: {status}</li>
          </ul>
        </TicketContainer>
      </Card>
      <LinksContainer>
        <GoToLink to="/play" isbacklink="true">
          <span>{'<'}</span> Play
        </GoToLink>
        <GoToLink to="/checkResults">
          Check results <span>{'>'}</span>
        </GoToLink>
      </LinksContainer>
    </>
  );
};
