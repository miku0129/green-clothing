import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  toggleCartDropdownAction,
  updateCartCountAction,
  updateCartTotalPriceAction,
} from "../../store/cart/cart.action";
import { selectCartCount } from "../../store/cart/cart.selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ toggleCartDropdown, cartItems }) => {
  const dispatch = useDispatch();
  const toggleCartDropdownHandler = () => {
    dispatch(toggleCartDropdownAction(toggleCartDropdown));
  };

  const cartCount = useSelector(selectCartCount);
  useEffect(() => {
    const handleCartCountAndCartTotalPrice = () => {
      dispatch(updateCartCountAction(cartItems));
      dispatch(updateCartTotalPriceAction(cartItems));
    };
    handleCartCountAndCartTotalPrice();
  }, [cartItems]);

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleCartDropdownHandler} />

      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
