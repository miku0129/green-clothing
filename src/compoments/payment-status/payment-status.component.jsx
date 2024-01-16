import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { clearItemFromCartAction } from "../../store/cart/cart.action";

import { useStripe } from "@stripe/react-stripe-js";

import "./payment-status.styles.scss";

const PaymentStatus = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);

  const cartItems = useSelector(selectCartItems);
  console.log("cartItems", cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const client_secret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    // Retrieve the PaymentIntent
    stripe.retrievePaymentIntent(client_secret).then(({ paymentIntent }) => {
      // Inspect the PaymentIntent `status` to indicate the status of the payment
      // to your customer.
      //
      // Some payment methods will [immediately succeed or fail][0] upon
      // confirmation, while others will first enter a `processing` state.
      //
      // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
      switch (paymentIntent.status) {
        case "succeeded":
          cartItems.forEach((cartItem) => {
            dispatch(clearItemFromCartAction(cartItems, cartItem));
          });
          setMessage("Success! Payment received.");
          break;

        case "processing":
          setMessage(
            "Payment processing. We'll update you when payment is received."
          );
          break;

        case "requires_payment_method":
          setMessage("Payment failed. Please try another payment method.");
          // Redirect your user back to your payment page to attempt collecting
          // payment again
          break;

        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, cartItems, dispatch]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default PaymentStatus;
