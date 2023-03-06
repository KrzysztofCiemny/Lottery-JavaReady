import styled from 'styled-components';

export const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
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

  div {
    text-align: center;
    width: 100%;
    margin-bottom: 3rem;
    span {
      color: green;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;
