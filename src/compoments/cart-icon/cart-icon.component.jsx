import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { toggleCartDropdown, setToggleCartDropdown, cartCount } =
    useContext(CartContext);

  const toggleCartDropdownHandler = () => {
    setToggleCartDropdown(!toggleCartDropdown);
  };

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleCartDropdownHandler} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
