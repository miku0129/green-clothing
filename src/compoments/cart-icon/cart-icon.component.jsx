import { useDispatch, useSelector } from "react-redux";

import { handleToggleCartDropdownAction, handleUpdateCartCount } from "../../store/cart/cart.action";
import { selectCartCount } from "../../store/cart/cart.selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { useEffect } from "react";

const CartIcon = ({ toggleCartDropdown, cartItems }) => {
  const dispatch = useDispatch();
  const handleToggleCartDropdown = () => {
    dispatch(handleToggleCartDropdownAction(toggleCartDropdown));
  };

  const cartCount = useSelector(selectCartCount); 
  useEffect(()=> {
    const handleCartCount = () => {
      dispatch(handleUpdateCartCount(cartItems))
    }
    handleCartCount(); 
  }, [cartItems])

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={handleToggleCartDropdown} />

      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
