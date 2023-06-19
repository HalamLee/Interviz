import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import notoSansKr from '@/styles/font';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSansKr.className}>
      <Component {...pageProps} />
    </main>
  );
}
