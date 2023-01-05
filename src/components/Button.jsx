import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../theme/colors';
import { Radius } from '../theme/radiuses';
import BaseButton from './base/BaseButton';

const Size = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const Variant = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
};

const ButtonColor = {
  ORANGE: 'orange',
  GREEN: 'green',
};

const sizeToCSS = {
  [Size.MEDIUM]: css`
    padding: 0 4px 2px;
  `,
  [Size.LARGE]: css`
    padding: 2px 6px 4px;
  `,
};

const variantToCSS = {
  [Variant.FILLED]: css`
    background-color: var(--color-button);
    border-color: transparent;
    color: #fff;
  `,
  [Variant.OUTLINED]: css`
    background-color: transparent;
    border-color: var(--color-button);
    color: var(--color-button);
  `,
};

const colorToCSS = {
  [ButtonColor.ORANGE]: css`
    --color-button: ${Color.ORANGE_30};

    &:hover,
    &:focus {
      --color-button: ${Color.ORANGE_20};
    }

    &:active {
      --color-button: ${Color.ORANGE_40};
    }

    &:disabled {
      --color-button: ${Color.GRAY_30};
    }
  `,
  [ButtonColor.GREEN]: css`
    --color-button: ${Color.GREEN_30};

    &:hover,
    &:focus {
      --color-button: ${Color.GREEN_20};
    }

    &:active {
      --color-button: ${Color.GREEN_40};
    }

    &:disabled {
      --color-button: ${Color.GRAY_30};
    }
  `,
};

const Button = styled(BaseButton).attrs(({ theme, size, variant, color }) => {
  const defaultColor = theme.current === Theme.ADULT ? ButtonColor.ORANGE : ButtonColor.GREEN;

  return {
    variant: variant || Variant.FILLED,
    size: size || Size.MEDIUM,
    color: color || defaultColor,
  };
})`
  ${({ size }) => sizeToCSS[size]}
  ${({ variant }) => variantToCSS[variant]}
  ${({ color }) => colorToCSS[color]}

  border-radius: ${Radius[4]};
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border-width: 1px;
  border-style: solid;
  gap: 4px;
  align-items: center;

  svg {
    color: currentColor;
  }
`;

export default Button;
