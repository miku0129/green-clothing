import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { toggleCartDropdown, setToggeCartDropdown, cartCount } =
    useContext(CartContext);

  const toggleCartDropdownHandler = () => {
    setToggeCartDropdown(!toggleCartDropdown);
  };

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleCartDropdownHandler} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
