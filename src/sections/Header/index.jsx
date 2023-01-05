import styled from 'styled-components';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Icon from '../../components/Icon';
import { IconButton } from '../../components/IconButton';
import Logo from '../../components/Logo';
import { Color } from '../../theme/colors';
import HeaderNavigationButtons from './HeaderNavigationButtons';
import HeaderNavigationLinks from './HeaderNavigationLinks';
import HeaderSearchForm from './HeaderSearchForm';

const StyledTop = styled.div`
  align-items: center;
  display: flex;
  gap: 19px;
  justify-content: space-between;
  padding: 8px 0;

  @media (min-width: 768px) {
    border-bottom: 1px solid ${Color.GRAY_20};
  }
`;

const StyledThemeButton = styled(Button).attrs({
  color: 'green',
})``;

const StyledMenuButton = styled(IconButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavigationWrapper = styled.div`
  align-items: center;
  display: none;
  padding: 8px 0;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  flex-grow: 1;
  gap: 32px;
  justify-content: space-between;
`;

const StyledHeaderSearchForm = styled(HeaderSearchForm)`
  margin-left: 32px;
`;

function Header() {
  return (
    <header>
      <Container>
        <StyledTop>
          <Logo />
          <StyledThemeButton>
            <Icon name="bike-child" />
            Детям
          </StyledThemeButton>
          <StyledMenuButton>
            <Icon name="menu" />
          </StyledMenuButton>
        </StyledTop>

        <StyledNavigationWrapper>
          <StyledNavigation>
            <HeaderNavigationLinks />
            <HeaderNavigationButtons />
          </StyledNavigation>

          <StyledHeaderSearchForm />
        </StyledNavigationWrapper>
      </Container>
    </header>
  );
}

export default Header;
