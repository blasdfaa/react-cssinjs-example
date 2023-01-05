import styled from 'styled-components';

const BaseButton = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))`
  display: inline-flex;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export default BaseButton;
