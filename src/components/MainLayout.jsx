import { useState } from 'react';

import { Outlet } from 'react-router';

import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart}/>
      <Outlet context={{cart, setCart}}/>
      <Footer />
    </>
  );
};
export default MainLayout;
