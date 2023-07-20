// import { useState } from "react";

// import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../compoments/sign-up-form/sign-up-form.component";
import SignInForm from "../../compoments/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div>
      <h1>Sign In page</h1>
      <SignInForm />
      {/* <button onClick={logGoogleUser}>sign-in with google account</button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
