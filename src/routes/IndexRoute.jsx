import styled from 'styled-components';
import CardsList from '../components/CardsList';
import CategoryCard from '../components/CategoryCard';
import Container from '../components/Container';
import NewsCard from '../components/NewsCard';
import useMocks from '../hooks/useMocks';
import BannersList from '../sections/BannersList';
import SubscriptionForm from '../sections/SubscriptionForm';
import { VisuallyHiddenMixin } from '../theme/mixins';

const StyledIndexRoute = styled.main`
  display: grid;
  gap: 40px;
  padding: 20px 0 60px;
`;

const StyledTitle = styled.h1`
  ${VisuallyHiddenMixin}
`;

function IndexRoute() {
  const { categories, news } = useMocks();

  return (
    <Container>
      <StyledIndexRoute>
        <StyledTitle>Главная страница</StyledTitle>

        <BannersList />

        <CardsList title="Категории великов">
          {categories.map(({ amount, image, imageAlt, name }) => (
            <CategoryCard amount={amount} image={image} imageAlt={imageAlt} name={name} key={imageAlt} />
          ))}
        </CardsList>

        <CardsList title="Новости">
          {news.map(({ date, image, imageAlt, title }) => (
            <NewsCard title={title} image={image} imageAlt={imageAlt} date={date} key={imageAlt} />
          ))}
        </CardsList>

        <SubscriptionForm />
      </StyledIndexRoute>
    </Container>
  );
}

export default IndexRoute;
