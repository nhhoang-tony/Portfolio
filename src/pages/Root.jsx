import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

function RootLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
        <ScrollToTop></ScrollToTop>
      </main>
    </>
  );
}

export default RootLayout;
