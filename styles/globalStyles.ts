import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle` 
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    scroll-behavior: smooth;
    background: papayawhip;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;
