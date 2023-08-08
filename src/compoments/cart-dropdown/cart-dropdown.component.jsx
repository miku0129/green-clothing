import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <Button>checkout</Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
