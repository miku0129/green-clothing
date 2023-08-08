import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const handleToggleCartDropdownAction = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_CART_DROP_DOWN, !bool);
};

const addCartItem = (cartItems, productToAdd) => {
  console.log("cartItems? ", cartItems);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const handleUpdateCartCount = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );
  return createAction(CART_ACTION_TYPES.SET_CART_COUNT, newCartCount);
};

export const handleUpdateCartTotalPrice = (newCartItems) => {
  const newCartTotalPrice = newCartItems.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );
  return createAction(
    CART_ACTION_TYPES.SET_CART_TOTAL_PRICE,
    newCartTotalPrice
  );
};
