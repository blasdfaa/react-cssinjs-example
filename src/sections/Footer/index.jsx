import styled from 'styled-components';
import Container from '../../components/Container';
import Logo from '../../components/Logo';
import Typography from '../../components/Typography';
import { Color } from '../../theme/colors';
import { AccentBlockMixin } from '../../theme/mixins';
import FooterContactsItem from './FooterContactsItem';
import FooterSocialLinks from './FooterSocialLinks';

const StyledFooter = styled.footer`
  background-color: ${Color.GRAY_60};
`;

const StyledContent = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px 0;

  @media (min-width: 768px) {
    grid-template-columns: min-content 1fr;
    gap: 32px;
    padding: 32px 0;
  }
`;

const StyledContacts = styled.address`
  ${AccentBlockMixin}

  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

const StyledContactLink = styled(Typography).attrs({
  color: Color.WHITE,
  variant: 'text2',
  as: 'a',
})``;

const StyledCopyright = styled.div`
  background-color: ${Color.GRAY_70};
  padding: 2px 0 4px;
`;

const StyledCopyrightText = styled(Typography).attrs({
  variant: 'text3',
  color: Color.GRAY_30,
})`
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledContent>
          <Logo />
          <StyledContacts>
            <FooterContactsItem title="Пиши">
              <StyledContactLink href="mailto:hello@velik.ru">hello@velik.ru</StyledContactLink>
            </FooterContactsItem>
            <FooterContactsItem title="Звони">
              <StyledContactLink href="tel:+79999999999">+7 999 999 99 99</StyledContactLink>
            </FooterContactsItem>
            <FooterContactsItem title="Заходи">
              <StyledContactLink href="#">Санкт-Петербург, наб. реки Карповки, 5П</StyledContactLink>
            </FooterContactsItem>
            <FooterContactsItem title="Следи">
              <FooterSocialLinks />
            </FooterContactsItem>
          </StyledContacts>
        </StyledContent>
      </Container>

      <StyledCopyright>
        <Container>
          <StyledCopyrightText>© ООО «Интерактивные обучающие технологии», 2013−2022</StyledCopyrightText>
        </Container>
      </StyledCopyright>
    </StyledFooter>
  );
}

export default Footer;
