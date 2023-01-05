import { css } from 'styled-components';
import { Theme } from '.';
import { Color } from './colors';
import { Radius } from './radiuses';

export const VisuallyHiddenMixin = css`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const AccentBlockMixin = css`
  background-color: ${({ theme }) => (theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30)};
  background-position: right 4px bottom 4px;
  background-repeat: no-repeat;
  border-radius: ${Radius[4]};
  padding: 4px 8px 8px;

  ${({ theme }) =>
    theme.current === Theme.ADULT
      ? css`
          background-color: ${Color.ORANGE_30};
          background-image: url(/images/bike-adult.svg);
        `
      : css`
          background-color: ${Color.GREEN_30};
          background-image: url(/images/bike-child.svg);
        `}

  @media (min-width: 768px) {
    padding: 8px 16px 16px;
  }
`;
