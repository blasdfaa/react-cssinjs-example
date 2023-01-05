import styled from 'styled-components';
import CardsList from '../components/CardsList';
import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import Typography from '../components/Typography';
import useMocks from '../hooks/useMocks';
import BikesFilter from '../sections/BikesFilter';

const StyledBikesRoute = styled.main`
  display: grid;
  gap: 40px;
  padding: 20px 0 60px;
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h1',
  variant: 'title1',
})``;

function BikesRoute() {
  const { products } = useMocks();

  return (
    <Container>
      <StyledBikesRoute>
        <StyledTitle>Велики для взрослых</StyledTitle>

        <BikesFilter />

        <CardsList>
          {products.map(({ discount, hit, image, imageAlt, name, novelty, price, unavailable }) => (
            <ProductCard
              key={name}
              discount={discount}
              hit={hit}
              image={image}
              imageAlt={imageAlt}
              name={name}
              novelty={novelty}
              price={price}
              unavailable={unavailable}
            />
          ))}
        </CardsList>
      </StyledBikesRoute>
    </Container>
  );
}

export default BikesRoute;
