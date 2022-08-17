import { useEffect, useReducer } from 'react';
import styles from './App.module.scss';
import Cart from './components/Cart';
import Products from './components/Products';
import { CartReducer } from './reducer/CartReducer';
import { ADD_PRODUCTS } from './reducer/const.type';
import { getProducts } from './service';

const initialState = {
  products: [],
  cart: [],
  total: 0,
};
function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    getProducts().then((res) => {
      dispatch({ type: ADD_PRODUCTS, payload: res });
    });
  }, []);
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles['header-title']}>D-MART</h1>
      </header>
      <main className={styles.main}>
        <Products
          products={state.products}
          cart={state.cart}
          dispatch={dispatch}
        />
        <Cart cart={state.cart} dispatch={dispatch} />
      </main>
      <footer className={styles.footer}>
        <p>All rights are reserved by Mahammad Kasim Nadim</p>
      </footer>
    </>
  );
}

export default App;
