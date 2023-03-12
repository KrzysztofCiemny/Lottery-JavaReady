import { t } from 'i18next';
import React, { useState } from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { ErrorMessage } from '../../components/ErrorMessage';
import { PageHeader } from '../../components/PageHeader';
import { useApi } from '../../composables/useApi';
import { ButtonsContainer, Container, Input } from './PlayPage.styles';

const NUMBER_OF_INPUTS = 6;
const getRandomBetween1to99 = () => Math.floor(Math.random() * 99) + 1;

export const PlayPage = () => {
  const [inputs, setInputs] = useState<string[]>(Array(NUMBER_OF_INPUTS).fill(''));
  const { sendNumbers, postRequestError } = useApi();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = event.target.value;
    setInputs(updatedInputs);

    if (updatedInputs[index].length > 2) {
      updatedInputs[index] = updatedInputs[index].slice(0, 2);
    }
    if (updatedInputs[index].charAt(0) == '0') {
      updatedInputs[index] = updatedInputs[index].slice(1);
    }
  };

  const inputValidation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case '-':
      case '.':
      case ',':
      case '+':
        event.preventDefault();
        return false;
    }
  };

  const fillRandom = () => {
    const randomInputs = Array.from({ length: NUMBER_OF_INPUTS }, () =>
      getRandomBetween1to99(),
    );
    setInputs(randomInputs.map(String));
  };

  return (
    <>
      <PageHeader>
        <h2>{t('playTheLotteryMessage')}</h2>
        <p>{t('enterNumbersMessage')}</p>
      </PageHeader>
      <Card>
        <Container>
          <div>
            {inputs.map((input, index) => (
              <Input
                key={index}
                type="number"
                value={input}
                onChange={(event) => handleInputChange(event, index)}
                onKeyDown={(event) => inputValidation(event)}
                required
                min={1}
                max={99}
              />
            ))}
          </div>
          <ButtonsContainer>
            <Button type="button" onClick={fillRandom}>
              {t('randomMessage')}
            </Button>
            <Button type="submit" onClick={() => sendNumbers({ typedNumbers: inputs })}>
              {t('submitMessage')}
            </Button>
          </ButtonsContainer>
          <ErrorMessage>{postRequestError ? t('errorMessage') : ''}</ErrorMessage>
        </Container>
      </Card>
    </>
  );
};
