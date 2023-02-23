import styled from 'styled-components';

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
  }

  ul {
    list-style-type: none;
    margin: 2rem 0 0 0;
    padding: 0;

    font-size: 1.1rem;
    font-weight: 500;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;
`;
