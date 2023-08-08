import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleToggleCartDropdownAction, handleUpdateCartCount, handleUpdateCartTotalPrice } from "../../store/cart/cart.action";
import { selectCartCount } from "../../store/cart/cart.selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ toggleCartDropdown, cartItems }) => {
  const dispatch = useDispatch();
  const handleToggleCartDropdown = () => {
    dispatch(handleToggleCartDropdownAction(toggleCartDropdown));
  };

  const cartCount = useSelector(selectCartCount); 
  useEffect(()=> {
    const handleCartCountAndCartTotalPrice = () => {
      dispatch(handleUpdateCartCount(cartItems))
      dispatch(handleUpdateCartTotalPrice(cartItems))
    }
    handleCartCountAndCartTotalPrice(); 
  }, [cartItems])

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={handleToggleCartDropdown} />

      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
