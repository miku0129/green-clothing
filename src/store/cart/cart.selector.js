import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectToggleCartDropdown = createSelector(
  [selectCartReducer],
  (cart) => cart.toggleCartDropdown
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0)
);

export const selectCartTotoalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, current) => total + current.price * current.quantity,
      0
    )
);
