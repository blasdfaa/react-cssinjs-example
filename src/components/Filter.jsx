import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../theme/colors';
import { IconName } from '../theme/icons';
import Icon from './Icon';

const StyledWrapper = styled.div`
  display: inline-flex;
  position: relative;
`;

const StyledFilter = styled.select`
  appearance: none;
  color: ${Color.WHITE};
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  padding-right: 24px;
  width: 100%;

  + svg {
    color: ${Color.WHITE};
  }

  &:hover {
    color: ${({ theme }) => (theme.current === Theme.ADULT ? Color.ORANGE_20 : Color.GREEN_20)};

    + svg {
      color: ${({ theme }) => (theme.current === Theme.ADULT ? Color.ORANGE_20 : Color.GREEN_20)};
    }
  }

  &:focus {
    color: ${({ theme }) => (theme.current === Theme.ADULT ? Color.ORANGE_40 : Color.GREEN_40)};

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

function Filter({ className, label, children }) {
  return (
    <StyledWrapper className={className}>
      <StyledFilter aria-label={label}>{children}</StyledFilter>
      <StyledArrowIcon />
    </StyledWrapper>
  );
}

export default Filter;
