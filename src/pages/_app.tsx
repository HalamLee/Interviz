import type { AppProps } from 'next/app';
import notoSansKr from '@styles/font';
import GlobalStyle from '@styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import Layout from '@components/layout';

import type { ReactElement, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import SplashScreen from '@components/splash-screen';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setIsHydrated(true);

    // 2초 후에 스플래시 스크린을 숨김
    const timer = setTimeout(() => {
      setShowSplash(false);
      window.sessionStorage.setItem('isSplashDisplayed', 'true');
    }, 2000);

    return () => clearTimeout(timer); // 컴포넌트가 unmount되면 타이머를 클리어
  }, []);

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  if (!isHydrated) {
    return null; // 서버에서는 아무것도 렌더링하지 않도록 함
  }

  if (typeof window !== 'undefined') {
    if (window.sessionStorage.getItem('isSplashDisplayed') !== 'true') {
      return (
        <>
          <GlobalStyle />
          <Layout>
            <SplashScreen />
          </Layout>
        </>
      );
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout className={notoSansKr.className}>
        {getLayout(<Component {...pageProps} />)}
      </Layout>
    </ThemeProvider>
  );
}
