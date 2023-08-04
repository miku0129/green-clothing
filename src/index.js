import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { Provider } from "react-redux";

// import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartContextProvider } from "./contexts/cart.context";
import { store } from "./store/store";

import App from "./App";
import { stripePromise } from "./utils/stripe/stripe.utils";

import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <UserProvider> */}
          <CategoriesProvider>
            <CartContextProvider>
              <Elements stripe={stripePromise}>
                <App />
              </Elements>
            </CartContextProvider>
          </CategoriesProvider>
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
