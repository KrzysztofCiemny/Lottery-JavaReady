import styled from 'styled-components';

export const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    font-size: 1.2rem;
    font-weight: 500;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;
