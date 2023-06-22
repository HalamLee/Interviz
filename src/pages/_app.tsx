import type { AppProps } from 'next/app';
import notoSansKr from '@styles/font';
import GlobalStyle from '@styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import Layout from '@components/layout';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout className={notoSansKr.className}>
        {getLayout(<Component {...pageProps} />)}
      </Layout>
    </ThemeProvider>
  );
}
