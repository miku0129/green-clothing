// import { createContext, useReducer } from "react";
// import { createAction } from "../utils/reducer/reducer.utils";

// // const addCartItem = (cartItems, productToAdd) => {
// //   const existingCartItem = cartItems.find(
// //     (cartItem) => cartItem.id === productToAdd.id
// //   );

// //   if (existingCartItem) {
// //     return cartItems.map((cartItem) =>
// //       cartItem.id === productToAdd.id
// //         ? { ...cartItem, quantity: cartItem.quantity + 1 }
// //         : cartItem
// //     );
// //   }
// //   return [...cartItems, { ...productToAdd, quantity: 1 }];
// // };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   return cartItems
//     .map((item) => {
//       if (item.id === cartItemToRemove.id) item.quantity--;
//       return item;
//     })
//     .filter((item) => item.quantity > 0);
// };

// const clearCartItem = (cartItems, cartItemToClear) => {
//   return cartItems.filter((item) => item.id !== cartItemToClear.id);
// };

// export const CartContext = createContext({
//   // toggleCartDropdown: null,
//   // setToggleCartDropdown: () => null,
//   // cartItems: [],
//   // addItemToCart: () => {},
//   removeItemToCart: () => null,
//   clearItemFromCart: () => null,
//   // cartCount: 0,
//   cartTotalPrice: 0,
// });

// const CART_ACTION_TYPES = {
//   // SET_CART_ITEMS: "SET_CART_ITEMS",
//   // SET_CART_DROP_DOWN: "SET_CART_DROP_DOWN",
// };

// const INITIAL_STATE = {
//   // toggleCartDropdown: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotalPrice: 0,
// };

// const cartReducer = (state, action) => {
//   console.log("dispatch");
//   console.log("action: ", action);
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTION_TYPES.SET_CART_DROP_DOWN:
//       return {
//         ...state,
//         toggleCartDropdown: payload,
//       };

//     default:
//       throw new Error(`Unhandled type ${type} in cartReducer`);
//   }
// };

// export const CartContextProvider = ({ children }) => {
//   const [
//     { cartItems, toggleCartDropdown, cartCount, cartTotalPrice },
//     dispatch,
//   ] = useReducer(cartReducer, INITIAL_STATE);

//   // const setToggleCartDropdown = (bool) => {
//   //   dispatch(createAction(CART_ACTION_TYPES.SET_CART_DROP_DOWN, bool));
//   // };

//   // const updateCartItemReducer = (newCartItems) => {
//     // const newCartCount = newCartItems.reduce(
//     //   (total, currentItem) => total + currentItem.quantity,
//     //   0
//     // );

//     // const newCartTotal = newCartItems.reduce(
//     //   (total, current) => total + current.price * current.quantity,
//     //   0
//     // );

//     // dispatch(
//     //   createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//     //     cartItems: newCartItems,
//     //     cartTotalPrice: newCartTotal,
//     //     // cartCount: newCartCount,
//     //   })
//     // );
//   };

//   // const addItemToCart = (productToAdd) => {
//   //   const newCartItems = addCartItem(cartItems, productToAdd);
//   //   updateCartItemReducer(newCartItems);
//   // };

//   const removeItemToCart = (cartItemToRemove) => {
//     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//     updateCartItemReducer(newCartItems);
//   };

//   const clearItemFromCart = (cartItemToRemove) => {
//     const newCartItems = clearCartItem(cartItems, cartItemToRemove);
//     updateCartItemReducer(newCartItems);
//   };

//   const value = {
//     // toggleCartDropdown,
//     // setToggleCartDropdown,
//     cartItems,
//     // addItemToCart,
//     removeItemToCart,
//     clearItemFromCart,
//     // cartCount,
//     cartTotalPrice,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
