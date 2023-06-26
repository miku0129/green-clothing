import { useState } from "react";

import app from "../../firebase-init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
} from "firebase/auth";
app();

const SignIn = () => {
  const [hasLogin, setHasLogin] = useState(false);
  console.log("haslogin ", hasLogin);
  const signin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);
    setHasLogin(true);
  };
  return (
    <>
      {hasLogin === false && (
        <div>
          <button onClick={signin}>login</button>
        </div>
      )}
      {hasLogin === true && (
        <div>
          <h1>already login</h1>
        </div>
      )}
    </>
  );
};

export default SignIn;
