import { t } from 'i18next';
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
          <h2>{t('ticketMessage')}</h2>
          <div>
            <p>{t('copyTicketMessage')}</p>
            {isCopied ? <span>{t('copiedMessage')}</span> : null}
          </div>
          <ul>
            <li>
              {t('idMessage')}
              <CopyToClipboard text={uuid} onCopy={() => setIsCopied(true)}>
                <span style={{ cursor: 'pointer' }}>{uuid}</span>
              </CopyToClipboard>
            </li>
            <li>
              {t('createdMessage')} {convertDate(creationDateTime)}
            </li>
            <li>
              {t('expiresMessage')} {convertDate(expirationDateTime)}
            </li>
            <li>
              {t('statusMessage')} {status}
            </li>
          </ul>
        </TicketContainer>
      </Card>
      <LinksContainer>
        <GoToLink to="/play" isbacklink="true">
          <span>{'<'}</span> {t('playMessage')}
        </GoToLink>
        <GoToLink to="/checkResults">
          {t('checkResultsMessage')} <span>{'>'}</span>
        </GoToLink>
      </LinksContainer>
    </>
  );
};
