import { useDispatch } from "react-redux";

import { handleToggleCartDropdownAction } from "../../store/cart/cart.action";



import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = ({toggleCartDropdown}) => {
  const dispatch = useDispatch();
  const handleToggleCartDropdown = () => {
    dispatch(handleToggleCartDropdownAction(toggleCartDropdown));
  };

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={handleToggleCartDropdown} />

      {/* <ItemCount>{cartCount}</ItemCount> */}
    </CartIconContainer>
  );
};

export default CartIcon;
