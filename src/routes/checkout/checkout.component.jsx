import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../compoments/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, setToggeCartDropdown } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setToggeCartDropdown(false);
  }, []);

  useEffect(() => {
    const curricuateTotalAmount = () => {
      const updatedTotalAmount = cartItems.reduce(
        (total, current) => total + current.price * current.quantity,
        0
      );
      setTotalAmount(updatedTotalAmount);
    };
    curricuateTotalAmount();
  }, [cartItems]);

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
      <span className="total">Total: {totalAmount}</span>
    </div>
  );
};

export default Checkout;
