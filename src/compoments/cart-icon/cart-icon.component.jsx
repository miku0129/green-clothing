import { useContext } from "react";

import { ReactComponent as ShoppinIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { toggleCartDropdown, setToggeCartDropdown, cartCount } =
    useContext(CartContext);

  const toggleCartDropdownHandler = () => {
    setToggeCartDropdown(!toggleCartDropdown);
  };

  return (
    <div className="cart-icon-container">
      <ShoppinIcon
        className="shopping-icon"
        onClick={toggleCartDropdownHandler}
      />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
