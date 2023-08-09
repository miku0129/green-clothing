import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const toggleCartDropdownAction = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_CART_DROP_DOWN, !bool);
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  return cartItems
    .map((item) => {
      if (item.id === cartItemToRemove.id) item.quantity--;
      return item;
    })
    .filter((item) => item.quantity > 0);
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export const addItemToCartAction = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCartAction = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCartAction = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
