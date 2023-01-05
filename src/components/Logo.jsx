import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled(Link)`
  display: inline-block;
  height: 22px;
  width: 128px;
`;

function Logo({ className }) {
  return (
    <StyledLogo to="/" className={className}>
      <img src="/images/logo-adult.svg" width={128} height={22} alt="" />
    </StyledLogo>
  );
}

export default Logo;
