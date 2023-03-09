import styled from 'styled-components';

export const Card = styled.div`
  padding: clamp(1rem, 1rem, 2rem);
  margin: 1rem;
  background-color: ${({ theme }) => theme.card};
  border-radius: 1em;
  box-shadow: 0 5px 15px -10px ${({ theme }) => theme.textPrimary};
  transition: 0.5s;
  @media (min-width: 1024px) {
    padding: 3rem 2rem 5rem 2rem;
  }
`;
