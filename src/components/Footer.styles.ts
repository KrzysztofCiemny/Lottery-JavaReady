import styled from 'styled-components';

import { theme } from '../Theme';

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${theme.primary};
  color: ${theme.secondary};
  padding: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
