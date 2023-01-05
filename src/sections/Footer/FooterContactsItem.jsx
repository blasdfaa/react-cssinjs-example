import styled from 'styled-components';
import Typography from '../../components/Typography';
import { Color } from '../../theme/colors';

const StyledWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledTitle = styled(Typography).attrs({
  variant: 'title4',
  color: Color.ORANGE_40,
})``;

function FooterContactsItem({ children, title }) {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledWrapper>
  );
}
export default FooterContactsItem;
