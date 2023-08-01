import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../compoments/checkout-item/checkout-item.component";
import PaymentForm from "../../compoments/payment-form/payment-form.component";

import { CheckoutContainer } from "./checkout.styles";

const Checkout = () => {
  const { cartItems, setToggeCartDropdown, cartTotalPrice } =
    useContext(CartContext);

  useEffect(() => {
    setToggeCartDropdown(false);
  }, []);

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
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
