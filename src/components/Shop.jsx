import { useState, useEffect } from 'react';

import styles from '../style/Shop.module.css';
import { Link } from 'react-router';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.shop}>
      <Banner />
      <Filters />
      <ProductList products={products} />
    </div>
  );
};
export default Shop;

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h2>All Products</h2>
    </div>
  );
};

const Filters = () => {
  return (
    <div className={styles.filters}>
      <h3>Filters</h3>
      <hr />
      <h4>Price</h4>
      <hr />
      <h4>Categories</h4>
      <hr />
      <h4>Color</h4>
      <hr />
    </div>
  );
};

const ProductList = (products) => {
  return (
    <div className={styles.productList}>
      <h3>{products.products.length} items</h3>
      <hr />
      <div className={styles.productsDisplay}>
        {products.products.map((product) => (
          <Link to={`/shop/${product.id}`} className={styles.link} key={product.title}>
            <ProductCard
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

const ProductCard = (props) => {
  return (
    <div className={styles.productCard}>
      <img
        src={props.image}
        alt={props.title}
        className={styles.productCardImg}
      />
      <hr />
      <div className={styles.productCardText}>
        <div className={styles.productCardInfo}>
          <p>{props.title}</p>
          <div className={styles.productCardInfoSizes}>
            <p>Sizes:</p>
            <ul>
              <li>XS</li>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCardPrice}>{props.price}€</div>
      </div>
    </div>
  );
};
