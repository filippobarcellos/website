import { useState } from 'react';
import type { AppProps } from 'next/app';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import { IsSsrMobileContext } from '@/context/useIsMobile';

import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </ThemeProvider>
      </IsSsrMobileContext.Provider>
    </QueryClientProvider>
  );
}
