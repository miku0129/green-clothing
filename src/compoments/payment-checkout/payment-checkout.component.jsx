import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PaymentForm from "../payment-form/payment-form.component";

const PaymentCheckout = ({props}) => {
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          currency: "eur",
          amount: 1099,
          appearance: { theme: "stripe" },
        }}
      >
        <PaymentForm props={props}/>
      </Elements>
    </div>
  );
};

export default PaymentCheckout;
