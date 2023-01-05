import styled from 'styled-components';
import { TextLink } from '../../components/TextButton';

const LINKS = [
  {
    label: 'Велики',
    path: '/bikes',
  },
  {
    label: 'Новости',
    path: '#',
  },
  {
    label: 'Услуги',
    path: '#',
  },
];

const StyledLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledLinkItem = styled(TextLink).attrs({
  size: 'large',
})``;

function HeaderNavigationLinks() {
  return (
    <StyledLinks>
      {LINKS.map(({ label, path }) => (
        <StyledLinkItem key={label} to={path}>
          {label}
        </StyledLinkItem>
      ))}
    </StyledLinks>
  );
}

export default HeaderNavigationLinks;
