import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  p {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.textPrimary};
  border: 1px solid ${({ theme }) => theme.textPrimary};
  margin-bottom: 1.2rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
  transition: 0.5s;

  @media (min-width: 1024px) {
    padding: 0.5rem;
  }
`;

export const WinningNumbersButton = styled.span`
  border-bottom: 1px solid;
  color: ${({ theme }) => theme.button};
  cursor: pointer;
  font-weight: 700;
`;

export const NumbersDrawnMessage = styled.p`
  color: ${({ theme }) => theme.positive};
  margin: 0;
  font-size: 0.8rem;
`;
export const NumbersLoadingMessage = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
  font-size: 0.8rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;
`;
