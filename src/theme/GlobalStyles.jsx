import { GlobalColors } from './colors';
import { GlobalFonts } from './fonts';
import SpriteWithIcons from './icons';
import { GlobalRadiuses } from './radiuses';
import { GlobalResets } from './reset';
import { GlobalShadows } from './shadows';

function GlobalStyles() {
  return (
    <>
      <GlobalResets />
      <GlobalFonts />
      <GlobalColors />
      <GlobalShadows />
      <GlobalRadiuses />
      <SpriteWithIcons />
    </>
  );
}

export default GlobalStyles;
