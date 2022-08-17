import React from 'react';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../reducer/const.type';
import styles from './Products.module.scss';

const Products = ({ products, cart = [], dispatch }) => {
  const addToCartHandler = (e, product) => {
    e.preventDefault();
    dispatch({
      type: ADD_TO_CART,
      payload: { ...product, qty: product.qty + 1 || 1 },
    });
  };
  const removeFormCartHandler = (e, product) => {
    e.preventDefault();
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { ...product, qty: product.qty - 1 },
    });
  };
  return (
    <section className={styles.products}>
      {products &&
        products.map((product) => (
          <div className={styles['product']} key={product.id}>
            <figure>
              <img
                className={styles['product-image']}
                src={product.thumbnail}
                alt={product.title}
              />
              <figcaption className={styles['product-title']}>
                {product.title}
              </figcaption>
            </figure>
            <div className={styles.actions}>
              {!cart.some((c) => c.id === product.id) ? (
                <button
                  className={styles.add}
                  onClick={(e) => addToCartHandler(e, product)}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className={styles.remove}
                  onClick={(e) => removeFormCartHandler(e, product)}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        ))}
    </section>
  );
};

export default Products;
