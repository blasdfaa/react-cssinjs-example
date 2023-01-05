import styled from 'styled-components';
import Icon from '../../components/Icon';
import { IconButton } from '../../components/IconButton';
import { Color } from '../../theme/colors';
import { IconName } from '../../theme/icons';

const LINKS = [
  { label: 'telegram', url: '#', icon: IconName.TELEGRAM },
  { label: 'youtube', url: '#', icon: IconName.YOUTUBE },
  { label: 'vk', url: '#', icon: IconName.VK },
];

const StyledWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledLink = styled(IconButton).attrs({
  as: 'a',
})`
  color: ${Color.WHITE};
`;

function FooterSocialLinks() {
  return (
    <StyledWrapper>
      {LINKS.map(({ label, icon, url }) => (
        <StyledLink href={url} key={label} aria-label={label}>
          <Icon name={icon} />
        </StyledLink>
      ))}
    </StyledWrapper>
  );
}

export default FooterSocialLinks;
