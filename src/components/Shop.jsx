import styles from '../style/Shop.module.css';

import productImage from "../assets/product-card-default.svg"

const Shop = () => {
  return (
    <div className={styles.shop}>
      <Banner />
      <Filters />
      <ProductList />
    </div>
  );
};
export default Shop;

const Banner = () => {
    return(
        <div className={styles.banner}>
            <h2>All Products</h2>
        </div>
    );
}

const Filters = () => {
    return(
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
}

const ProductList = () => {
    return(
        <div className={styles.productList}>
            <h3>nº items</h3>
            <hr />
            <div className={styles.productsDisplay}>
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard /> 
            </div>
        </div>
    );
}

const ProductCard = () => {
    return(
        <div className={styles.productCard}>
            <img src={productImage} alt="product image" />
            <hr />
            <div className={styles.productCardText}>
                <div className={styles.productCardInfo}>
                    <p>Basic Tee</p>
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
                <div className={styles.productCardPrice}>
                    34.95€
                </div>
            </div>  
        </div>
    );
}

