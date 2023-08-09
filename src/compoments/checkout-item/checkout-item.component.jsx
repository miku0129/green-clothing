import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import {
  removeItemFromCartAction,
  addItemToCartAction,
  clearItemFromCartAction,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { CheckoutItemContainer, ImageContainer } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(addItemToCartAction(cartItems, cartItem));
  };
  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCartAction(cartItems, cartItem));
  };
  const clearItemFromCartHandler = () => {
    dispatch(clearItemFromCartAction(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemFromCartHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemFromCartHandler}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
