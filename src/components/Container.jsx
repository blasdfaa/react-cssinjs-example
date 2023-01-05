import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 380px;
  min-width: 320px;
  padding: 0 16px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 46px;
    max-width: 768px;
  }
`;

export default Container;
