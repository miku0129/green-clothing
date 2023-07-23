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

const removeAllCartItem = (cartItems, cartItemToRemove) =>{
  console.log("click")
  return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  
}

export const CartContext = createContext({
  toggleCartDropdown: null,
  setToggeCartDropdown: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartContextProvider = ({ children }) => {
  const [toggleCartDropdown, setToggeCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const removeAllItemToCart = (cartItemToRemove) => {
    setCartItems(removeAllCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    toggleCartDropdown,
    setToggeCartDropdown,
    cartItems,
    setCartItems,
    addItemToCart,
    removeItemToCart,
    removeAllItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
