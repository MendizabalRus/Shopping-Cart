import { useState } from "react";
import { Link } from "react-router";

import styles from "../style/Header.module.css"

import cart from "../assets/cart-icon.svg"
import search from "../assets/search-icon.svg"
import account from "../assets/account-icon.svg"
import logo from "../assets/logo.png"

const Header = () => {
    const [searched, setSearched] = useState(false);

    const handleSearch = () => {(
        setSearched(prev => !prev)
    )}

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
            <Link to={"/"}><img src={logo} alt="brand logo" className={styles.logo} /></Link>
            <Link to={"/"} className={styles.link}><h2>PRO-IEK-TO</h2></Link>
        </div>
        <nav className={styles.headerRight}>
            <Link to="shop" className={styles.link}>Shop</Link>
            <Link to="best-sellers" className={styles.link}>Best Sellers</Link>
            <Link to="about" className={styles.link}>About</Link>
            {searched && (<input type='text' className={styles.input}/>)}
            <img src={search} alt="search-icon" className={styles.icon} onClick={handleSearch}/>

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
export default Header;