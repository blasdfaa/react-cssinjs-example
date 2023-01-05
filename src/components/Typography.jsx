import styled, { css } from 'styled-components';
import { Color } from '../theme/colors';

const Variant = {
  TITLE_1: 'title1',
  TITLE_2: 'title2',
  TITLE_3: 'title3',
  TITLE_4: 'title4',
  TEXT_1: 'text1',
  TEXT_2: 'text2',
  TEXT_3: 'text3',
};

const VariantToCSS = {
  [Variant.TITLE_1]: css`
    font-size: 36px;
    font-weight: 600;
    line-height: 40px;
  `,
  [Variant.TITLE_2]: css`
    font-size: 28px;
    font-weight: 600;
    line-height: 30px;
  `,
  [Variant.TITLE_3]: css`
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
  `,
  [Variant.TITLE_4]: css`
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
  `,
  [Variant.TEXT_1]: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  `,
  [Variant.TEXT_2]: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  `,
  [Variant.TEXT_3]: css`
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
  `,
};

const Typography = styled.p.attrs(({ color, variant }) => ({
  color: color || Color.WHITE,
  variant: variant || Variant.TITLE_1,
}))`
  font-style: normal;
  ${({ variant }) => VariantToCSS[variant]}

  color: ${({ color }) => color};
`;

export default Typography;
