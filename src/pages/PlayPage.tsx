import React, { useState } from 'react';

import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ErrorMessage } from '../components/ErrorMessage';
import { PageHeader } from '../components/PageHeader';
import { useApi } from '../composables/useApi';
import { FormButtonsContainer, FormContainer, Input } from './PlayPage.styles';

export const PlayPage = () => {
  const [inputs, setInputs] = useState(Array(6).fill(''));
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
    if (updatedInputs[index].charAt(0) == 0) {
      updatedInputs[index] = updatedInputs[index].slice(1);
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case '-':
        event.preventDefault();
        return false;
      case '.':
        event.preventDefault();
        return false;
      case ',':
        event.preventDefault();
        return false;
      case '+':
        event.preventDefault();
        return false;
    }
  };

  const fillRandom = () => {
    const randomInputs = Array.from(
      { length: 6 },
      () => Math.floor(Math.random() * 99) + 1,
    );
    setInputs(randomInputs.map(String));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendNumbers({ typedNumbers: inputs });
  };

  return (
    <>
      <PageHeader>
        <h2>Play the lottery</h2>
        <p>Enter your lucky numbers or just fill the fields randomly</p>
      </PageHeader>
      <Card>
        <FormContainer onSubmit={handleSubmit}>
          <div>
            {inputs.map((input, index) => (
              <Input
                key={index}
                type="number"
                value={input}
                onChange={(event) => handleInputChange(event, index)}
                onKeyDown={(event) => handleInputKeyDown(event)}
                required
                min={1}
                max={99}
              />
            ))}
          </div>
          <FormButtonsContainer>
            <Button type="button" onClick={fillRandom}>
              Random
            </Button>
            <Button type="submit">Submit</Button>
          </FormButtonsContainer>
          <ErrorMessage>
            {postRequestError
              ? 'Something went wrong. Please try again or refresh the page'
              : ''}
          </ErrorMessage>
        </FormContainer>
      </Card>
    </>
  );
};
