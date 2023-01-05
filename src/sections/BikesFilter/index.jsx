import styled from 'styled-components';
import Button from '../../components/Button';
import Filter from '../../components/Filter';
import Icon from '../../components/Icon';
import Select from '../../components/Select';
import Toggle from '../../components/Toggle';
import { Theme } from '../../theme';
import { Color } from '../../theme/colors';
import { IconName } from '../../theme/icons';
import { VisuallyHiddenMixin } from '../../theme/mixins';
import { Radius } from '../../theme/radiuses';

const StyledBikesFilter = styled.section`
  display: grid;
  gap: 8px;
`;

const StyledTitle = styled.h2`
  ${VisuallyHiddenMixin}
`;

const StyledFiltersButton = styled(Button)`
  justify-content: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledSortAndTogglesWrapper = styled.div`
  display: grid;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
    grid-template-columns: min-content min-content;
    justify-content: space-between;
  }
`;

const StyledSort = styled(Select)`
  width: 100%;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

const StyledToggleWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: max-content max-content;
`;

const StyledFiltersList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    gap: 16px;
    background-color: ${({ theme }) => (theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30)};
    border-radius: ${Radius[4]};
    padding: 4px 6px 8px;
  }
`;

const StyledFiltersItem = styled.li`
  display: grid;
`;

function BikesFilter() {
  return (
    <StyledBikesFilter>
      <StyledTitle>Фильтры</StyledTitle>

      <StyledFiltersButton>
        <Icon name={IconName.FILTERS} />
        Фильтры
      </StyledFiltersButton>

      <StyledSortAndTogglesWrapper>
        <StyledSort label="Сортировка">
          <option>Сначала дешёвые</option>
          <option>Сначала дорогие</option>
          <option>Сначала старые</option>
          <option>Сначала новые</option>
        </StyledSort>

        <StyledToggleWrapper>
          <Toggle label="В наличии" />
          <Toggle label="Со скидкой" />
        </StyledToggleWrapper>
      </StyledSortAndTogglesWrapper>

      <StyledFiltersList>
        <StyledFiltersItem>
          <Filter label="Бренд">
            <option>Бренд</option>
            <option>BMC</option>
            <option>Mongoose</option>
            <option>Peugeot</option>
            <option>Trek</option>
            <option>Triban</option>
            <option>Norco</option>
          </Filter>
        </StyledFiltersItem>
        <StyledFiltersItem>
          <Filter label="Материал рамы">
            <option>Материал рамы</option>
            <option>Стальные</option>
            <option>Алюминиевые</option>
            <option>Карбоновые</option>
            <option>Титановые</option>
          </Filter>
        </StyledFiltersItem>
        <StyledFiltersItem>
          <Filter label="Радиус колёс">
            <option>Радиус колёс</option>
            <option>20 дюймов</option>
            <option>24 дюйма</option>
            <option>26 дюймов</option>
            <option>27 дюймов</option>
            <option>28 дюймов</option>
            <option>29 дюймов</option>
          </Filter>
        </StyledFiltersItem>
        <StyledFiltersItem>
          <Filter label="Тормоза">
            <option>Тормоза</option>
            <option>Ободные</option>
            <option>Дисковые</option>
          </Filter>
        </StyledFiltersItem>
      </StyledFiltersList>
    </StyledBikesFilter>
  );
}

export default BikesFilter;
