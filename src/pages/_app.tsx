import type { AppProps } from 'next/app';

import { Global } from '@emotion/react';
import { globalStyle } from '../styles';
import Layout from '../components/Layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
