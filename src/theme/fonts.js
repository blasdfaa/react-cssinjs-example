import { createGlobalStyle } from 'styled-components';
import CommissionerRegular from '../assets/fonts/Commissioner-Regular.ttf';
import CommissionerSemiBold from '../assets/fonts/Commissioner-SemiBold.ttf';
import DelaGothicOneRegular from '../assets/fonts/DelaGothicOne-Regular.ttf';

export const Font = {
  COMMISSIONER: 'var(--font-commissioner)',
  DELA_GOTHIC: 'var(--font-dela-gothic-one)',
};

export const GlobalFonts = createGlobalStyle`
 @font-face {
    font-family: 'Commissioner';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${CommissionerRegular});
  } 

  @font-face {
    font-family: 'Commissioner';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${CommissionerSemiBold});
  } 

  @font-face {
    font-family: 'Dela Gothic One';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${DelaGothicOneRegular});
  } 

  :root {
    --font-commissioner: 'Commissioner', Arial, sans-serif;
    --font-dela-gothic-one: 'Dela Gothic One', var(--font-commissioner);
  }
`;
