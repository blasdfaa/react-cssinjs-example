import { createGlobalStyle } from 'styled-components';

export const Radius = {
  4: 'var(--radius-4)',
};

export const GlobalRadiuses = createGlobalStyle`
  :root { 
    --radius-4: 4px;
  }
`;
