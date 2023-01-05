import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../../theme';
import { Color } from '../../theme/colors';
import { Radius } from '../../theme/radiuses';
import { Shadow } from '../../theme/shadows';

const BaseCard = styled(Link)`
  background-color: ${Color.GRAY_40};
  border-radius: ${Radius[4]};
  display: grid;
  overflow: hidden;
  position: relative;

  ${({ theme }) =>
    theme.current === Theme.ADULT
      ? css`
          background-color: ${Color.GRAY_40};
        `
      : css`
          background-color: ${Color.WHITE};
          box-shadow: ${Shadow.CARD_DEFAULT_CHILD};
        `}

  &:hover,
  &:focus {
    &::after {
      border-radius: ${Radius[4]};
      box-shadow: ${({ theme }) =>
        theme.current === Theme.ADULT ? Shadow.CARD_HOVER_OR_FOCUS_ADULT : Shadow.CARD_HOVER_OR_FOCUS_CHILD};
      content: '';
      height: 100%;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`;

export default BaseCard;
