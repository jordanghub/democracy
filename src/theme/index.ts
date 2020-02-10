import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const theme: DefaultTheme = {};

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }  
`;
