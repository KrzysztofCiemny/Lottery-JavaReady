import React, { ReactNode } from 'react';

import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { ContentWrapper, InsideWrapper, Wrapper } from './PageWrapper.styles';

interface Props {
  children: ReactNode;
}

export const PageWrapper = ({ children }: Props) => {
  return (
    <Wrapper>
      <InsideWrapper>
        <Navbar />
        <ContentWrapper>{children}</ContentWrapper>
      </InsideWrapper>
      <Footer />
    </Wrapper>
  );
};
