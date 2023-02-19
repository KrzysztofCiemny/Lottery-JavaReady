import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

export const Input = styled.input`
  margin-bottom: 1.2rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 0.5rem;
  }
`;
