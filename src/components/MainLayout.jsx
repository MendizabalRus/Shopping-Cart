import { useState } from 'react';

import { Outlet } from 'react-router';

import Header from './Header';
import Footer from './Footer';

import styles from "../style/MainLayout.module.css"

const MainLayout = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className={styles.aboveTheFold}>
        <Header cart={cart}/>
        <Outlet context={{cart, setCart}}/>
      </div>
      <Footer />
    </>
  );
};
export default MainLayout;
