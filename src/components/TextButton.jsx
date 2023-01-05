import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Color } from '../theme/colors';
import BaseButton from './base/BaseButton';

const Size = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const SizeToCSS = {
  [Size.MEDIUM]: css`
    font-size: 14px;
    line-height: 18px;
  `,
  [Size.LARGE]: css`
    font-size: 16px;
    line-height: 22px;
  `,
};

const CSS = css`
  ${({ size }) => SizeToCSS[size]}

  background-color: transparent;
  color: ${Color.WHITE};
  font-weight: 400;

  &:hover,
  &:focus {
    color: ${Color.ORANGE_20};
  }

  &:active {
    color: ${Color.ORANGE_40};
  }

  &:disabled {
    color: ${Color.GRAY_30};
  }
`;

const attrsFactory = ({ size }) => ({
  size: size || Size.MEDIUM,
});

const StyledTextButton = styled(BaseButton).attrs(attrsFactory)`
  ${CSS}
`;

const StyledTextLink = styled(Link).attrs(attrsFactory)`
  ${CSS}
`;

export { StyledTextButton as TextButton, StyledTextLink as TextLink };
