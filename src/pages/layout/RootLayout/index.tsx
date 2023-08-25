import React from 'react';
// import { useLocation } from '@reach/router';
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > main {
    min-height: calc(100vh - 86px - 289px);
  }
`;

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  // const location = useLocation();
  const isHomePage = true;
  // const isHomePage = location.pathname === '/';

  return (
    <Container>
      <Header />
      <main style={{ paddingTop: isHomePage ? 80 : 0 }}>{children}</main>
      <Footer />
    </Container>
  );
};

export default RootLayout;
