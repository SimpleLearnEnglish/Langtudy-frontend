import { css } from '@emotion/react';
import { reset } from './reset';

export const globalStyle = css`
  ${reset}
  :root {
    --color-primary: #4cb050;
    --color-primary-darker: #39933d;
    --color-border: #e2e3eb;
    --color-brand: rgba(144, 188, 85);
    --color-background: #f4f4f4;
    --color-text-primary: #1d1c24;
    --color-text-secondary: #848894;
    --color-text-description: #6a6a6a;
    --color-text-flex: var(--color-background);
    --color-flex: var(--price-level-5);
  }

  * {
    box-sizing: border-box;
  }
  #__next {
    font-family: 'Pretendard Variable', Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    letter-spacing: -0.03em;
  }
  html {
    color: #fff;
    height: 100%;
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Pretendard';
    letter-spacing: -0.05rem;
    color: var(--color-text-primary);
    background-color: var(--color-background);
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .outer {
    height: 100vh;
    overflow-y: auto;
  }
  .outer::-webkit-scrollbar {
    display: none;
  }
  .inner {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;
