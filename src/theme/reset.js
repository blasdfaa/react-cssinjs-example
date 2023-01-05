import { createGlobalStyle } from 'styled-components';
import { Theme } from '.';
import { Color } from './colors';
import { Font } from './fonts';

export const GlobalResets = createGlobalStyle`
 * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
 
    border: none; 
    border-radius: 0;
 
    background: none;
    box-shadow: none; 
  }

  body {
    font-family: ${Font.COMMISSIONER};
    font-weight: 400;
    background-color: ${({ theme }) => (theme.current === Theme.ADULT ? Color.GRAY_50 : Color.WHITE)};
  }

  button,
  input,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  } 
`;
