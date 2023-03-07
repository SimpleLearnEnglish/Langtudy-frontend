import Head from 'next/head';
import React from 'react';

interface SeoTitle {
  title: string;
}

const Seo: React.FC<SeoTitle> = ({ title }) => {
  return (
    <Head>
      <title>{title} | 랭터디</title>
    </Head>
  );
};

export default Seo;
