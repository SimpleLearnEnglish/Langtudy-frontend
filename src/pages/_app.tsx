import type { AppProps } from 'next/app';

import { Global } from '@emotion/react';
import { globalStyle } from '../styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  <Global styles={globalStyle} />;
  return <Component {...pageProps} />;
};

export default MyApp;
