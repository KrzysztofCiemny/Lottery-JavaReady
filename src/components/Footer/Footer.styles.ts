import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  opacity: 0.9;
  border-top: 1px solid lightgrey;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  z-index: -1;
  @media (min-width: 768px) {
    z-index: unset;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;
