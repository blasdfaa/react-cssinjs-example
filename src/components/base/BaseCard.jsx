import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { Radius } from '../../theme/radiuses';
import { Shadow } from '../../theme/shadows';

const BaseCard = styled(Link)`
  background-color: ${Color.GRAY_40};
  border-radius: ${Radius[4]};
  display: grid;
  overflow: hidden;
  position: relative;

  &:hover,
  &:focus {
    &::after {
      border-radius: ${Radius[4]};
      box-shadow: ${Shadow.CARD_HOVER_OR_FOCUS_ADULT};
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
