import styles from '../style/Cart.module.css';

import { useOutletContext } from 'react-router';

import trashIcon from '../assets/trash-icon.svg';

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  console.log(cart.cart);

  const total = cart.reduce((sum, item) => {
    return (sum += item.quantity * item.product.price);
  }, 0);

  console.log(total);

  const handleDecrease = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleIncrease = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const handleDelete = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.product.id !== id)
    );
  };

  return (
    <div className={styles.cart}>
      <h2>Checkout</h2>
      <hr />
      {cart.length === 0
        ? ''
        : cart.map((item) => (
            <>
              <div className={styles.cartProduct}>
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className={styles.cartProductImg}
                />
                <div className={styles.cartProductInfo}>
                  <h3>{item.product.title}</h3>
                  <p>Quantity:</p>
                  <div className={styles.productCardQuantity}>
                    <div className={styles.productCardQuantitySelector}>
                      <p onClick={() => handleDecrease(item.product.id)}>-</p>
                      <hr />
                      <p>{item.quantity}</p>
                      <hr />
                      <p onClick={() => handleIncrease(item.product.id)}>+</p>
                    </div>
                    <img
                      src={trashIcon}
                      alt="trash icon"
                      className={styles.icon}
                      onClick={() => handleDelete(item.product.id)}
                    />
                  </div>
                </div>
                <div className={styles.productCardPrices}>
                  <div className={styles.pvpPrice}>
                    <p>P.V.P:</p>
                    <div>{item.product.price}€</div>
                  </div>
                  <div className={styles.totalPrice}>
                    <p>Total:</p>
                    <div>{item.quantity * item.product.price}€</div>
                  </div>
                </div>
              </div>
              <hr />
            </>
          ))}
      <div className={styles.total}>
        <h2>Total:</h2>
        <h2>{total}€</h2>
      </div>
      <button className={styles.checkoutBtn}>Checkout</button>
    </div>
  );
};
export default Cart;
