import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, setCartItems, setCartContext } = useContext(CartContext);
  useEffect(() => {
    setCartContext(false);
  }, []);

  const removeItemFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Checkout page</h1>
      {cartItems &&
        cartItems.map(({ name, price, imageUrl, quantity, id }) => {
          return (
            <div>
              <img src={imageUrl} alt={name} />
              <div>
                <div>{name}</div>
                <div>{quantity}</div>
                <div>{price}</div>
                <div
                  onClick={() => {
                    removeItemFromCart(id);
                  }}
                >
                  remove
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Checkout;
