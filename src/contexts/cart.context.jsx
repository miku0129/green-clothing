import { createContext, useState } from "react";


export const CartContext = createContext({
  cartContext: null,
  setCartContext: () => null,
});

export const CartContextProvider = ({ children }) => {
  const [cartContext, setCartContext] = useState(false);
  const value = { cartContext, setCartContext };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
