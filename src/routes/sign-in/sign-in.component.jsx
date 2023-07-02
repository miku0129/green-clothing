import { useState } from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../compoments/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup(); 
    createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>sign-in</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
