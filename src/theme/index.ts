import { DefaultTheme, createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

export const theme: DefaultTheme = {};

export const materialPalette = createMuiTheme({
  palette: {
    type: "dark",
    primary: teal
  }
});

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }  
`;
