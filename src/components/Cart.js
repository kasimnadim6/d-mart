import React, { useEffect, useState } from 'react';
import { CHANGE_QUANTITY } from '../reducer/const.type';
import styles from './Cart.module.scss';

const Cart = ({ cart, dispatch }) => {
  const [total, setTotal] = useState(0);
  const changeQuantityHandler = (e, id, qty) => {
    e.preventDefault();
    dispatch({
      type: CHANGE_QUANTITY,
      payload: { id, qty },
    });
  };
  useEffect(() => {
    const totalPrice = cart.reduce((acc, cur) => {
      acc = acc + cur.price * cur.qty;
      return acc;
    }, 0);
    setTotal(totalPrice);
  }, [cart]);
  return (
    <section className={styles.cart}>
      <div className={styles.head}>
        <h2 className={styles['my-cart']}>My Cart</h2>
        <span className={styles.total}>Total : {`$${total} USD`}</span>
      </div>
      {!cart.length && (
        <span className={styles['empty-cart']}>Cart is Empty</span>
      )}
      {cart.map((product) => (
        <div className={styles.product} key={product.id}>
          <div
            className={styles['product-image']}
            style={{ backgroundImage: `url(${product.thumbnail})` }}
          ></div>
          <div className={styles['product-info']}>
            <h3>{product.title}</h3>
            <p>
              <span>Price: </span>
              {`$${product.price}`}
            </p>
            <div className={styles.quantity}>
              <button
                className={styles.dec}
                onClick={(e) =>
                  changeQuantityHandler(e, product.id, product.qty - 1)
                }
              >
                -
              </button>
              <span>{product.qty}</span>
              <button
                className={styles.inc}
                onClick={(e) =>
                  changeQuantityHandler(e, product.id, product.qty + 1)
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cart;
