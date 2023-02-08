import type { AppProps } from 'next/app';
import React from 'react';

import { Global } from '@emotion/react';
import { globalStyle } from '../styles';
import Layout from '../components/Layout/Layout';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) queryClientRef.current = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClientRef.current}>
        <Layout>
          <Global styles={globalStyle} />
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default MyApp;
