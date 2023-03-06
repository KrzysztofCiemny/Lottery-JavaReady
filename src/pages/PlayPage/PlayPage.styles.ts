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
  width: clamp(36px, 13%, 100px);
  margin: 0.4rem;
  font-size: 1.2rem;
  text-align: center;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
