import React, { useState } from 'react';

import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { PageHeader } from '../components/PageHeader';
import { useApi } from '../composables/useApi';
import { FormButtonsContainer, FormContainer, Input } from './PlayPage.styles';

export const PlayPage = () => {
  const [inputs, setInputs] = useState(Array(6).fill(''));
  const { sendNumbers } = useApi();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = event.target.value;
    setInputs(updatedInputs);
  };

  const fillRandom = () => {
    const randomInputs = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
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
        </FormContainer>
      </Card>
    </>
  );
};
