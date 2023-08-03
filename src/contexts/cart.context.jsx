import { createContext, useEffect, useReducer } from "react";

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
  setToggleCartDropdown: () => null,
  cartItems: [],
  setCartItems: () => null,
  addItemToCart: () => {},
  removeItemToCart: () => null,
  clearItemFromCart: () => null,
  cartCount: 0,
  cartTotalPrice: 0,
});

export const CART_ACTION_TYPES = {
  SET_TOGGLE_CART_DROPDOWN: "SET_TOGGLE_CART_DROPDOWN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNTS: "SET_CART_COUNTS",
  SET_CART_TOTAL_PRICE: "SET_CART_TOTAL_PRICE",
};

const cartReducer = (state, action) => {
  console.log("dispatch");
  console.log("action: ", action);
  const { type, payload } = action;

  switch (type) {
    case "SET_TOGGLE_CART_DROPDOWN":
      return {
        ...state,
        toggleCartDropdown: payload,
      };
    case "SET_CART_ITEMS":
      return {
        ...state,
        cartItems: payload,
      };
    case "SET_CART_COUNTS":
      return {
        ...state,
        cartCount: payload,
      };
    case "SET_CART_TOTAL_PRICE":
      return {
        ...state,
        cartTotalPrice: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  toggleCartDropdown: false,
  cartItems: [],
  cartCount: 0,
  cartTotalPrice: 0,
};

export const CartContextProvider = ({ children }) => {
  // const [toggleCartDropdown, setToggleCartDropdown] = useState(false);
  const [{ toggleCartDropdown }, toggleCartDropdownDispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setToggleCartDropdown = (state) => {
    toggleCartDropdownDispatch({
      type: CART_ACTION_TYPES.SET_TOGGLE_CART_DROPDOWN,
      payload: state,
    });
  };

  // const [cartItems, setCartItems] = useState([]);
  const [{ cartItems }, cartItemsDispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setCartItems = (state) => {
    cartItemsDispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: state,
    });
  };

  // const [cartCount, setCartCount] = useState(0);
  const [{ cartCount }, cartCountDispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  console.log("cartCount: ", cartCount);

  const setCartCount = () => {
    cartCountDispatch({
      type: CART_ACTION_TYPES.SET_CART_COUNTS,
      payload: cartItems.reduce(
        (total, currentItem) => total + currentItem.quantity,
        0
      ),
    });
  };

  // const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [{ cartTotalPrice }, cartTotalPriceDispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  console.log("cartCount: ", cartCount);

  const setCartTotalPrice = () => {
    cartTotalPriceDispatch({
      type: CART_ACTION_TYPES.SET_CART_TOTAL_PRICE,
      payload: cartItems.reduce(
            (total, current) => total + current.price * current.quantity,
            0
          )
    });
  };


  // useEffect(() => {
  //   const updatedCountItem = cartItems.reduce(
  //     (total, currentItem) => total + currentItem.quantity,
  //     0
  //   );
  //   setCartCount(updatedCountItem);

  //   const updatedTotalPrice = cartItems.reduce(
  //     (total, current) => total + current.price * current.quantity,
  //     0
  //   );
  //   setCartTotalPrice(updatedTotalPrice);
  // }, [cartItems]);
  useEffect(() => {
    setCartCount();
    setCartTotalPrice(); 
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
    setToggleCartDropdown,
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

// import { createContext, useEffect, useState } from "react";

// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

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
//   toggleCartDropdown: null,
//   setToggleCartDropdown: () => null,
//   cartItems: [],
//   addItemToCart: () => {},
//   cartCount: 0,
//   cartTotalPrice: 0
// });

// export const CartContextProvider = ({ children }) => {
//   const [toggleCartDropdown, setToggleCartDropdown] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartTotalPrice, setCartTotalPrice] = useState(0);

//   useEffect(() => {
//     const updatedCountItem = cartItems.reduce(
//       (total, currentItem) => total + currentItem.quantity,
//       0
//     );
//     setCartCount(updatedCountItem);

//     const updatedTotalPrice = cartItems.reduce(
//       (total, current) => total + current.price * current.quantity,
//       0
//     );
//     setCartTotalPrice(updatedTotalPrice);
//   }, [cartItems]);

//   const addItemToCart = (productToAdd) => {
//     setCartItems(addCartItem(cartItems, productToAdd));
//   };

//   const removeItemToCart = (cartItemToRemove) => {
//     setCartItems(removeCartItem(cartItems, cartItemToRemove));
//   };

//   const clearItemFromCart = (cartItemToRemove) => {
//     setCartItems(clearCartItem(cartItems, cartItemToRemove));
//   };

//   const value = {
//     toggleCartDropdown,
//     setToggleCartDropdown,
//     cartItems,
//     setCartItems,
//     addItemToCart,
//     removeItemToCart,
//     clearItemFromCart,
//     cartCount,
//     cartTotalPrice
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
