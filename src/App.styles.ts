import { createGlobalStyle } from 'styled-components';

// @ts-ignore
import InterRegular from './fonts/Inter-Regular.woff'
// @ts-ignore
import RobotoRegular from './fonts/Roboto-Regular.woff'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'InterRegular';
    src: url(${InterRegular}) format("woff");
  }
  @font-face {
    font-family: 'RobotoRegular';
    src: url(${RobotoRegular}) format("woff");
  }
  html,
  body {
    padding: 0;
    margin: 0;
    background: #EBEEF3;
    font-family: 'InterRegular', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`