import { useId, useState } from 'react';
import styled from 'styled-components';
import { Color } from '../theme/colors';
import { Radius } from '../theme/radiuses';
import BaseButton from './base/BaseButton';
import Typography from './Typography';

const StyledToggle = styled(BaseButton)`
  height: 22px;
  position: relative;
  width: 22px;

  &::before {
    background-color: ${Color.GRAY_10};
    border-radius: ${Radius[4]};
    content: '';
    height: 8px;
    left: 0;
    position: absolute;
    top: 8px;
    width: 22px;
  }

  &::after {
    background-color: ${Color.GRAY_20};
    border-radius: 50%;
    content: '';
    height: 12px;
    left: 0;
    position: absolute;
    top: 6px;
    width: 12px;
  }

  &[aria-checked='true'] {
    &::before {
      background-color: ${Color.ORANGE_10};
    }

    &::after {
      background-color: ${Color.ORANGE_30};
      left: auto;
      right: 0;
    }

    &:hover,
    &:focus {
      &::after {
        background-color: ${Color.ORANGE_20};
      }
    }

    &:active {
      &::after {
        background-color: ${Color.ORANGE_40};
      }
    }
  }
`;

const StyledLabel = styled(Typography).attrs({ as: 'label', variant: 'text1' })`
  padding-left: 8px;
  cursor: pointer;
`;

const StyledWrapper = styled.div`
  align-items: center;
  display: inline-flex;
`;

function Toggle({ label, className }) {
  const [checked, setChecked] = useState(false);

  const id = useId();

  const handleClick = () => setChecked((prev) => !prev);

  return (
    <StyledWrapper className={className}>
      <StyledToggle id={id} onClick={handleClick} role="checkbox" aria-checked={checked} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledWrapper>
  );
}

export default Toggle;
