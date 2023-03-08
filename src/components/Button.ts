import styled from 'styled-components';

export const Button = styled.button`
  min-width: 7rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  font-size: 1.2rem;
  border: solid 1px ${({ theme }) => theme.textSecondary};
  border-radius: 1.5rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.textHighlited};
  }
`;
