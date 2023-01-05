import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../theme/colors';
import BaseCard from './base/BaseCard';
import Typography from './Typography';

const StyledImage = styled.img`
  height: 140px;
  object-fit: cover;
  width: 100%;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledContent = styled.div`
  align-items: end;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr min-content;
  padding: 4px 8px 8px;
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h3',
  variant: 'title4',
})``;

const StyledDate = styled(Typography).attrs(({ theme }) => ({
  as: 'span',
  variant: 'text2',
  color: theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30,
}))``;

function NewsCard({ className, title, date, image, imageAlt }) {
  return (
    <BaseCard className={className}>
      <article>
        <StyledImage src={image} alt={imageAlt} />

        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{date}</StyledDate>
        </StyledContent>
      </article>
    </BaseCard>
  );
}

export default NewsCard;
