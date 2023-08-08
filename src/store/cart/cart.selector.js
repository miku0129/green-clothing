import { createSelector } from "reselect";

export const selectToggleCartDropdown = (state) => {
  return state.cart.toggleCartDropdown;
};

export const selectCartItems = (state) => {
  return state.cart.cartItems;
};

export const selectCartCount = (state) => {
  return state.cart.cartCount;
};

export const selectCartTotoalPrice = (state) => {
  return state.cart.cartTotalPrice;
};
