import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="영어, 일본어, 학교 단어 시험을 공부하고 준비하신다면 간편하게 이용해보세요!"
        />
        <meta name="랭터디" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
