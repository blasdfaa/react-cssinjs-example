import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';

const StyledLogo = styled(Link)`
  display: inline-block;
  height: 22px;
  width: 128px;
`;

function Logo({ className }) {
  const { current } = useTheme();

  return (
    <StyledLogo to="/" className={className}>
      <img
        src={current === Theme.ADULT ? '/images/logo-adult.svg' : '/images/logo-child.svg'}
        width={128}
        height={22}
        alt=""
      />
    </StyledLogo>
  );
}

export default Logo;
