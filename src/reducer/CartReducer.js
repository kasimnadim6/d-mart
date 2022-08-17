import {
  ADD_PRODUCTS,
  ADD_TO_CART,
  CHANGE_QUANTITY,
  REMOVE_FROM_CART,
} from './const.type';

export const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter((c) => c.id !== action.payload.id);
      return { ...state, cart: filteredCart };
    case CHANGE_QUANTITY:
      const newCart = state.cart.filter((c) =>
        c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
      );
      return { ...state, cart: newCart };
    default:
      return { ...state };
  }
};
