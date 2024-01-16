import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./payment-form.styles.scss";

const PaymentForm = ({ props }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  //Stripeは金額が通貨の最小単位で指定されると想定されるため、
  //10eurを請求する場合は amountを1000とする必要がある
  const amount = props * 100;

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.log("error during submission", submitError);
      return;
    }

    setLoading(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
      }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: client_secret,
      confirmParams: {
        return_url: "https://jazzy-kitten-d0239f.netlify.app/payment-status",
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      handleError(error);
      window.alert(errorMessage);
    }
  };

  return (
    <div className="payment-form-container" onSubmit={paymentHandler}>
      <form className="form-container">
        <h2>Payment</h2>
        <PaymentElement />
        <div>
          <div id="message"></div>
          <Button
            className="payment-button"
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            disabled={!stripe || loading}
          >
            Pay now
          </Button>
          <br />
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
