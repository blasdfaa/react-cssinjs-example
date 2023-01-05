import styled from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Typography from '../../components/Typography';
import { AccentBlockMixin } from '../../theme/mixins';

const StyledSubscriptionForm = styled.section`
  ${AccentBlockMixin}

  display: grid;
  gap: 16px;
`;

const StyledTitle = styled(Typography).attrs({ variant: 'title2', as: 'h2' })``;

const StyledForm = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledSubmitButton = styled(Button).attrs({ size: 'large' })``;

function SubscriptionForm() {
  return (
    <StyledSubscriptionForm>
      <StyledTitle>Подпишись на рассылку</StyledTitle>

      <StyledForm>
        <Input placeholder="Электропочта" name="subsctiption" type="text" />
        <StyledSubmitButton type="submit">Подписаться</StyledSubmitButton>
      </StyledForm>
    </StyledSubscriptionForm>
  );
}

export default SubscriptionForm;
