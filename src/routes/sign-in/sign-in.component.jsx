import { useState } from "react";

import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../compoments/sign-up-form/sign-up-form.component";
import SignInForm from "../../compoments/sign-in-form/sign-in-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <SignInForm />
      <button onClick={logGoogleUser}>sign-in with google account</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
