import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Color } from '../theme/colors';
import BaseButton from './base/BaseButton';

const CSS = css`
  color: ${Color.ORANGE_30};
  display: inline-flex;

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

  svg {
    color: currentColor;
  }
`;

const StyledIconButton = styled(BaseButton)`
  ${CSS}
`;

const StyledIconLink = styled(Link)`
  ${CSS}
`;

export { StyledIconButton as IconButton, StyledIconLink as IconLink };
