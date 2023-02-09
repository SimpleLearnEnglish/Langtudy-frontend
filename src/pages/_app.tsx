import type { AppProps } from 'next/app';
import React from 'react';

import { Global } from '@emotion/react';
import { globalStyle } from '../styles';
import Layout from '../components/Layout/Layout';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Layout>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default MyApp;
