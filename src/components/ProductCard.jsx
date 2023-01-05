import styled, { css } from 'styled-components';
import { Color } from '../theme/colors';
import { IconName } from '../theme/icons';
import { Radius } from '../theme/radiuses';
import BaseCard from './base/BaseCard';
import Button from './Button';
import Icon from './Icon';
import { IconButton } from './IconButton';
import Typography from './Typography';

const StyledProductCard = styled.article`
  position: relative;
`;

const StyledImage = styled.img`
  height: 140px;
  object-fit: cover;
  width: 100%;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledContent = styled.div`
  display: grid;
  padding: 4px 8px 8px;
  row-gap: 8px;
`;

const StyledContentHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: 'text1',
})``;

const StyledPrice = styled(Typography).attrs({
  as: 'span',
  variant: 'title4',
})``;

const StyledButtons = styled.div`
  column-gap: 8px;
  display: flex;
`;

const StyledLabels = styled.div`
  display: grid;
  gap: 4px;
  justify-items: start;
  left: 4px;
  position: absolute;
  top: 4px;
`;

const StyledLabel = styled(Typography).attrs({
  as: 'span',
  variant: 'text2',
})`
  padding: 2px 4px 4px;
  border-radius: ${Radius[4]};
  background-color: ${Color.GRAY_40};
`;

const StyledIconButtons = styled.div`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 4px;
  top: 4px;
`;

const StyledIconButton = styled(IconButton)`
  background-color: ${Color.GRAY_40};
  border-radius: 50%;
  padding: 4px;

  &:disabled {
    background-color: ${Color.GRAY_30};
    color: ${Color.WHITE};
  }
`;

const DISABLED_CSS = css`
  cursor: not-allowed;

  ${StyledImage} {
    opacity: 0.4;
  }

  ${StyledName},
  ${StyledPrice} {
    color: ${Color.GRAY_30};
  }

  ${StyledLabel} {
    background-color: ${Color.GRAY_30};
  }

  &::after {
    display: none;
  }
`;

const StyledWrapper = styled(BaseCard)`
  ${({ disabled }) => disabled && DISABLED_CSS}
`;

function ProductCard({ className, name, price, image, imageAlt, hit, novelty, discount, unavailable }) {
  return (
    <StyledWrapper disabled={unavailable} className={className}>
      <StyledProductCard>
        <StyledImage src={image} alt={imageAlt} />

        <StyledContent>
          <StyledContentHeader>
            <StyledName>{name}</StyledName>
            <StyledPrice>{price}</StyledPrice>
          </StyledContentHeader>

          <StyledButtons>
            <Button disabled={unavailable}>Купить</Button>
            <Button variant="outlined" disabled={unavailable}>
              Подробнее
            </Button>
          </StyledButtons>
        </StyledContent>

        <StyledLabels>
          {hit && <StyledLabel>Хит</StyledLabel>}
          {novelty && <StyledLabel>Новинка</StyledLabel>}
          {discount && <StyledLabel>Скидка</StyledLabel>}
        </StyledLabels>

        <StyledIconButtons>
          <StyledIconButton aria-label="Добавить товар в сравнения" disabled={unavailable}>
            <Icon name={IconName.BAR_CHART_SMALL} />
          </StyledIconButton>
          <StyledIconButton aria-label="Добавить товар в избранное" disabled={unavailable}>
            <Icon name={IconName.HEART_SMALL} />
          </StyledIconButton>
        </StyledIconButtons>
      </StyledProductCard>
    </StyledWrapper>
  );
}

export default ProductCard;
