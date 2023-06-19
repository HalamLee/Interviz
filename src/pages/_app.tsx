import type { AppProps } from 'next/app';
import notoSansKr from '@/styles/font';
import GlobalStyle from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main className={notoSansKr.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
