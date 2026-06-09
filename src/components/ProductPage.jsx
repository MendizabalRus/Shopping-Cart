import { useState } from 'react';
import { useLoaderData } from 'react-router';

import styles from '../style/ProductPage.module.css';

const ProductPage = () => {
  const product = useLoaderData();

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleDecrement = () => {
    if (quantity === 1) return;
    else setQuantity((prev) => prev - 1);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={styles.productPage}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImg}
      />
      <div className={styles.productInfo}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <hr />
        <div className={styles.buyingSection}>
          <div className={styles.quantity}>
            <p onClick={() => handleDecrement()} className={styles.quantities}>-</p>
            <hr />
            <p onChange={() => handleQuantityChange}>{quantity}</p>
            <hr />
            <p onClick={() => handleIncrement()} className={styles.quantities}>+</p>
          </div>
          <button className={styles.addToCart}>Add {quantity} to cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
