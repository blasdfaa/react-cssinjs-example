import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../theme/colors';
import { IconName } from '../theme/icons';
import BaseField from './base/BaseField';
import Icon from './Icon';

const StyledWrapper = styled.div`
  display: inline-flex;
  position: relative;
  width: 200px;
`;

const StyledSelect = styled(BaseField).attrs({
  as: 'select',
})`
  appearance: none;
  width: 100%;
  padding: 0px 26px 2px 4px;
  cursor: pointer;

  &:hover {
    + svg {
      color: ${({ theme }) => (theme.current === Theme.ADULT ? Color.ORANGE_20 : Color.GREEN_20)};
    }
  }

  &:hover {
    + svg {
      color: ${({ theme }) => (theme.current === Theme.ADULT ? Color.ORANGE_40 : Color.GREEN_40)};
    }
  }
`;

const StyledArrowIcon = styled(Icon).attrs({ name: IconName.CHEVRON_DOWN })`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
`;

function Select({ className, label, children }) {
  return (
    <StyledWrapper className={className}>
      <StyledSelect aria-label={label}>{children}</StyledSelect>
      <StyledArrowIcon />
    </StyledWrapper>
  );
}

export default Select;
