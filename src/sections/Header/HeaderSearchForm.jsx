import styled from 'styled-components';
import Icon from '../../components/Icon';
import { IconButton } from '../../components/IconButton';
import Input from '../../components/Input';
import { IconName } from '../../theme/icons';

const StyledForm = styled.form`
  position: relative;
`;

const StyledInput = styled(Input)`
  padding-right: 26px;
`;

const StyledSubmitButton = styled(IconButton)`
  position: absolute;
  right: 4px;
  top: 4px;
`;

function HeaderSearchForm({ className }) {
  return (
    <StyledForm className={className} method="get" action="#">
      <StyledInput type="text" placeholder="Найти велик..." name="search" />
      <StyledSubmitButton type="submit">
        <Icon name={IconName.SEARCH} />
      </StyledSubmitButton>
    </StyledForm>
  );
}

export default HeaderSearchForm;
