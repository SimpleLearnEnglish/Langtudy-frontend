import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="assets/favicons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="assets/favicons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />

        <meta
          name="description"
          content="영어, 일본어, 학교 단어 시험을 공부하고 준비하신다면 간편하게 이용해보세요!"
        />
        <meta name="랭터디" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          href="public/favicons/apple-icon-180x180.png"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="splashscreens/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="splashscreens/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="splashscreens/iphoneplus_splash.png"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="splashscreens/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="splashscreens/ipad_splash.png"
          media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="splashscreens/ipadpro1_splash.png"
          media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="splashscreens/ipadpro2_splash.png"
          media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <meta name="theme-color" content="#f4f4f4"></meta>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
