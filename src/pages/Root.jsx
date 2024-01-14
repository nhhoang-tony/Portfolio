import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function RootLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RootLayout;
