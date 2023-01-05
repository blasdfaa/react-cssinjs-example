import styled from 'styled-components';
import Typography from '../../components/Typography';
import { Theme } from '../../theme';
import { Color } from '../../theme/colors';

const StyledWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledTitle = styled(Typography).attrs(({ theme }) => ({
  variant: 'title4',
  color: theme.current === Theme.ADULT ? Color.ORANGE_40 : Color.GREEN_40,
}))``;

function FooterContactsItem({ children, title }) {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledWrapper>
  );
}
export default FooterContactsItem;
