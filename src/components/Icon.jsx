import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../theme/colors';
import { IconName } from '../theme/icons';

const Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const IconSizeToCSS = {
  [Size.SMALL]: css`
    height: 16px;
    width: 16px;
  `,
  [Size.MEDIUM]: css`
    height: 22px;
    width: 22px;
  `,
  [Size.LARGE]: css`
    height: 36px;
    width: 36px;
  `,
};

const IconNameToIconSize = {
  [IconName.BAR_CHART_SMALL]: Size.SMALL,
  [IconName.HEART_SMALL]: Size.SMALL,
  [IconName.HEART]: Size.MEDIUM,
  [IconName.BAR_CHART]: Size.MEDIUM,
  [IconName.ARROW_RIGHT]: Size.MEDIUM,
  [IconName.BIKE_ADULT]: Size.MEDIUM,
  [IconName.BIKE_CHILD]: Size.MEDIUM,
  [IconName.CHEVRON_DOWN]: Size.MEDIUM,
  [IconName.FILTERS]: Size.MEDIUM,
  [IconName.SEARCH]: Size.MEDIUM,
  [IconName.SHOPPING_CART]: Size.MEDIUM,
  [IconName.TELEGRAM]: Size.MEDIUM,
  [IconName.USER]: Size.MEDIUM,
  [IconName.VK]: Size.MEDIUM,
  [IconName.YOUTUBE]: Size.MEDIUM,
  [IconName.MENU]: Size.LARGE,
};

const StyledIcon = styled.svg.attrs(({ theme, color }) => {
  const defaultColor = theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30;

  return {
    color: color || defaultColor,
  };
})`
  ${({ name }) => IconSizeToCSS[IconNameToIconSize[name]]}

  color: ${({ color }) => color};
`;

function Icon({ name, color, className }) {
  const xlinkHref = `#${name}`;

  return (
    <StyledIcon name={name} color={color} className={className} xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={xlinkHref} />
    </StyledIcon>
  );
}

export default Icon;
