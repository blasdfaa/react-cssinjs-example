import { Children } from 'react';
import styled from 'styled-components';
import Typography from './Typography';

const StyledTitle = styled(Typography).attrs({
  as: 'h2',
  variant: 'title2',
})`
  margin-bottom: 24px;
`;

const StyledList = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
`;

const StyledListItem = styled.div``;

function CardsList({ title, children }) {
  return (
    <section>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledList>
        {Children.map(children, (child) => (
          <StyledListItem>{child}</StyledListItem>
        ))}
      </StyledList>
    </section>
  );
}

export default CardsList;
