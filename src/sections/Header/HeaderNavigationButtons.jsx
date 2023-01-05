import styled from 'styled-components';
import Icon from '../../components/Icon';
import { IconLink } from '../../components/IconButton';
import { IconName } from '../../theme/icons';

const BUTTONS = [
  { label: 'Профиль', path: '#', icon: IconName.USER },
  { label: 'Избранное', path: '#', icon: IconName.HEART },
  { label: 'Статистика', path: '#', icon: IconName.BAR_CHART },
  { label: 'Корзина', path: '#', icon: IconName.SHOPPING_CART },
];

const StyledList = styled.div`
  display: flex;
  gap: 8px;
`;

function HeaderNavigationButtons() {
  return (
    <StyledList>
      {BUTTONS.map(({ icon, label, path }) => (
        <IconLink to={path} key={label}>
          <Icon name={icon} />
        </IconLink>
      ))}
    </StyledList>
  );
}

export default HeaderNavigationButtons;
