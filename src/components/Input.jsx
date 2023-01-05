import styled from 'styled-components';
import BaseField from './base/BaseField';

const Input = styled(BaseField)`
  padding: 3px 6px 3px;
  width: 200px;

  &::placeholder {
    color: currentColor;
  }
`;

export default Input;
