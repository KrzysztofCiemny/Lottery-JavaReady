import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const Input = styled.input`
  width: clamp(37px, 13%, 100px);
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.textPrimary};
  border: 1px solid ${({ theme }) => theme.textPrimary};
  border-radius: 0.4rem;
  margin: 0.4rem;
  padding: 0.3rem;
  font-size: 1.2rem;
  text-align: center;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  transition: 0.5s;
  -moz-appearance: textfield;
  @media (min-width: 1024px) {
    padding: 0.5rem;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px;
  font-size: 20px;
`;
