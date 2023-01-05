import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../sections/Footer';
import Header from '../sections/Header';

const StyledDefaultLayout = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
`;

function DefaultLayout() {
  return (
    <StyledDefaultLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledDefaultLayout>
  );
}

export default DefaultLayout;
