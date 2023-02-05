import React, { ReactNode } from 'react';

import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { ContentWrapper, Wrapper } from './PageWrapper.styles';

interface Props {
  children: ReactNode;
}

export const PageWrapper = ({ children }: Props) => {
  return (
    <Wrapper>
      <div>
        <Navbar />
        <ContentWrapper>{children}</ContentWrapper>
      </div>
      <Footer />
    </Wrapper>
  );
};
