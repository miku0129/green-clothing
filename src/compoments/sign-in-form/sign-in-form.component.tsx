import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  signInAuthUserEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { setCurrentUser } from "../../store/user/user.action";

import { SigninContainer } from "./sign-in-form.styles";

import { UserCredential, getAuth } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [field, setField] = useState(defaultFormField);
  const { email, password } = field;

  const auth = getAuth();

  const resetFormFields = () => {
    setField(defaultFormField);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user: UserCredential | undefined =
        await signInAuthUserEmailAndPassword(auth, email, password);
      user !== undefined
        ? dispatch(setCurrentUser(user.user))
        : console.log("user is undefiend");
      alert("login succeed");
      resetFormFields();
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/wrong-password":
            alert("incorrect password for email");
            break;
          case "auth/user-not-found":
            alert("no user associated with this email");
            break;
          default:
            console.log("error: ", error);
        }
      }
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //オブジェクト要素を更新
  };

  return (
    <SigninContainer>
      <h2>Already have an account</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChanges,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChanges,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type="submit">Signin</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            G signin
          </Button>
        </div>
      </form>
    </SigninContainer>
  );
};

export default SignInForm;
