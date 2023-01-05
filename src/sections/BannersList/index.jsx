import styled from 'styled-components';
import Banner from '../../components/Banner';
import useMocks from '../../hooks/useMocks';

const StyledList = styled.section`
  display: grid;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const StyledListItem = styled.div`
  @media (min-width: 768px) {
    display: grid;

    &:first-child {
      grid-row: span 2;
    }
  }
`;

function BannersList() {
  const { banners } = useMocks();

  return (
    <StyledList>
      {banners.map(({ image, imageAlt, size, title, discount }) => (
        <StyledListItem key={imageAlt}>
          <Banner size={size} title={title} discount={discount} image={image} imageAlt={imageAlt} />
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export default BannersList;
