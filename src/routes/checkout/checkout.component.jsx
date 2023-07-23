import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../compoments/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, setToggeCartDropdown, cartTotalPrice } = useContext(CartContext);

  useEffect(() => {
    setToggeCartDropdown(false);
  }, []);


  return (
    <div className="checkout-container">
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
    </div>
  );
};

export default Checkout;
