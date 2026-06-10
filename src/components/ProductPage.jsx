import { useState } from 'react';

import { useLoaderData, useOutletContext } from 'react-router';

import styles from '../style/ProductPage.module.css';

const ProductPage = () => {
  //parameters from loader
  const product = useLoaderData();

  // quantity setting
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

  //using [cart, setCart] state from MainLayout as context
  const { setCart } = useOutletContext();

  //handleing adding to cart
  const handleAddToCart = (product, quantity) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.product.id === product.id);

      if (existingProduct) {
        return prev.map((item) => item.product.id === product.id ?
          {
            ...item,
            quantity: item.quantity + quantity,
          }
          : item
        );
      }

      return [...prev, { product, quantity }];
    });
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
        <h3 className={styles.productPrice}>P.v.P.: {product.price}€</h3>
        <hr />
        <div className={styles.buyingSection}>
          <div className={styles.quantity}>
            <p onClick={() => handleDecrement()} className={styles.quantities}>
              -
            </p>
            <hr />
            <p onChange={() => handleQuantityChange}>{quantity}</p>
            <hr />
            <p onClick={() => handleIncrement()} className={styles.quantities}>
              +
            </p>
          </div>
          <button
            className={styles.addToCart}
            onClick={() => handleAddToCart(product, quantity)}
          >
            Add {quantity} to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
