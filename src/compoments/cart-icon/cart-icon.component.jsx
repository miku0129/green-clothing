import { useContext } from "react";

import { ReactComponent as ShoppinIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { cartContext, setCartContext } = useContext(CartContext);

  const cartContextHandler = () => {
    setCartContext(!cartContext);
  };

  return (
    <div className="cart-icon-container">
      <ShoppinIcon className="shopping-icon" onClick={cartContextHandler} />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
