import { Link } from 'react-router';
import { useState } from 'react';

import cart from "../assets/cart-icon.svg"
import search from "../assets/search-icon.svg"
import account from "../assets/account-icon.svg"
import background from "../assets/background.jpeg"

import styles from '../style/Home.module.css';

const Home = () => {
  return (
    <div className={styles.aboveTheFold}>
      <Header />
      <Hero />
    </div>
  );
};
export default Home;


const Header = () => {
    const [searched, setSearched] = useState(false);

    const handleSearch = () => {(
        setSearched(prev => !prev)
    )}

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img src="." alt="brand logo" />
          <h2>Brand</h2>
        </div>
        <nav className={styles.headerRight}>
            <Link to="shop" className={styles.link}>Shop</Link>
            <Link to="About" className={styles.link}>About</Link>
            <img src={search} alt="search-icon" className={styles.icon} onClick={handleSearch}/>
            {searched && (<input type='text' className={styles.input}/>)}

            <Link to="account" >
                <img src={account} alt="account icon" className={styles.icon} />
            </Link>
            <Link to="cart" >
                <img src={cart} alt="cart icon" className={styles.icon} />
            </Link>
        </nav>
      </header>
    </>
  );
};

const Hero = () => {
    return(
        <>
            <section className={styles.hero}>
                <img src={background} alt="home background image" className={styles.heroImg}/>
            </section>
        </>
    );
}
