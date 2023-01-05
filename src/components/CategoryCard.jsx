import styled from 'styled-components';
import { Color } from '../theme/colors';
import { Radius } from '../theme/radiuses';
import BaseCard from './base/BaseCard';
import Typography from './Typography';

const StyledWrapper = styled(BaseCard)`
  cursor: pointer;
  height: 140px;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledCategoryCard = styled.article`
  padding: 0 8px;
  position: relative;
`;

const StyledImage = styled.img`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: 'title3',
})`
  position: relative;
`;

const StyledAmount = styled(Typography).attrs({
  as: 'span',
  variant: 'text2',
})`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2px 4px 4px;
  border-radius: ${Radius[4]};
  background-color: ${Color.ORANGE_30};
`;

function CategoryCard({ className, image, name, amount, imageAlt }) {
  return (
    <StyledWrapper className={className} to="#">
      <StyledCategoryCard>
        <StyledImage src={image} alt={imageAlt} />

        <StyledName>{name}</StyledName>
        <StyledAmount>{amount}</StyledAmount>
      </StyledCategoryCard>
    </StyledWrapper>
  );
}

export default CategoryCard;
