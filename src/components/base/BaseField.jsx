import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { Radius } from '../../theme/radiuses';

const BaseField = styled.input`
  border: 1px solid ${Color.GRAY_20};
  border-radius: ${Radius[4]};
  color: ${Color.WHITE};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  &:hover {
    border-color: ${Color.ORANGE_20};
  }

  &:focus {
    border-color: ${Color.ORANGE_40};
  }
`;

export default BaseField;
