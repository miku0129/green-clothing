import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
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

export const CartContext = createContext({
  toggleCartDropdown: null,
  setToggeCartDropdown: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotalPrice: 0
});

export const CartContextProvider = ({ children }) => {
  const [toggleCartDropdown, setToggeCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    const updatedCountItem = cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
    setCartCount(updatedCountItem);

    const updatedTotalPrice = cartItems.reduce(
      (total, current) => total + current.price * current.quantity,
      0
    );
    setCartTotalPrice(updatedTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToRemove) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    toggleCartDropdown,
    setToggeCartDropdown,
    cartItems,
    setCartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartCount,
    cartTotalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
