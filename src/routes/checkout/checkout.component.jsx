import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, setCartItems, setToggeCartDropdown } =
    useContext(CartContext);
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

  const increaseItemInCart = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) item.quantity++;
      return item;
    });
    setCartItems(updatedCart);
  };

  const decreaseItemInCart = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) item.quantity--;
      return item;
    });
    setCartItems(updatedCart);
  };

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
                <div>
                  <span onClick={() => increaseItemInCart(id)}>increase </span>
                  {quantity}
                  <span onClick={() => decreaseItemInCart(id)}> decrease</span>
                </div>
                <div>{price}</div>
                <div
                  onClick={() => {
                    removeItemFromCart(id);
                  }}
                >
                  x
                </div>
              </div>
            </div>
          );
        })}
      <div>Total: {totalAmount}</div>
    </div>
  );
};

export default Checkout;
