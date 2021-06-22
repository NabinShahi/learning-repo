import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actionTypes";

const initialState = {
  cart: [],
};

// export const getCartTotal = (cart) => cart.reduce(
//   (total, currentItem) => (total = total + currentItem.price),
//   0
// );

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_FROM_BASKET:
      let newCart = [...state.cart];

      const index = state.cart.findIndex(
        (basketItem) => basketItem.id === action.payload
      );

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        alert(`id "${action.payload}" not found`);
      }
      return {...state, cart: newCart};

    default:
      return state;
  }
};
