import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';

function RootLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
        <ScrollToTop></ScrollToTop>
      </main>
      <Analytics></Analytics>
    </>
  );
}

export default RootLayout;
