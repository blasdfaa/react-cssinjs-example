import styled from 'styled-components';
import { Theme } from '../../theme';
import { Color } from '../../theme/colors';
import { Radius } from '../../theme/radiuses';

const BaseField = styled.input`
  border: 1px solid ${Color.GRAY_20};
  border-radius: ${Radius[4]};
  color: ${({ theme }) => (theme.current === Theme.ADULT ? Color.WHITE : Color.GRAY_60)};

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  &:hover {
    border-color: ${({ theme }) => (theme.current === Theme.ADULT ? Color.ORANGE_20 : Color.GREEN_20)};
  }

  &:focus {
    border-color: ${({ theme }) => (theme.current === Theme.ADULT ? Color.ORANGE_40 : Color.GREEN_40)};
  }
`;

export default BaseField;
