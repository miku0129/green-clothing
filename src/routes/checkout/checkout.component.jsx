import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import CheckoutItem from "../../compoments/checkout-item/checkout-item.component";

import PaymentCheckout from "../../compoments/payment-checkout/payment-checkout.component";

import {
  selectToggleCartDropdown,
  selectCartItems,
  selectCartTotoalPrice,
} from "../../store/cart/cart.selector";
import { toggleCartDropdownAction } from "../../store/cart/cart.action";

import { CheckoutContainer } from "./checkout.styles";

const Checkout = () => {
  const dispatch = useDispatch();
  const toggleCartDropdown = useSelector(selectToggleCartDropdown);
  if (toggleCartDropdown) {
    dispatch(toggleCartDropdownAction(!toggleCartDropdown));
  }
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotoalPrice);

  return (
    <CheckoutContainer>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotalPrice}</span>
      <PaymentCheckout props={cartTotalPrice}/>
    </CheckoutContainer>
  );
};

export default Checkout;
