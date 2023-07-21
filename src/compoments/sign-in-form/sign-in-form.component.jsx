import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  signInAuthUserEmailAndPassword,
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [field, setField] = useState(defaultFormField);
  const { email, password } = field;

  const resetFormFields = () => {
    setField(defaultFormField);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("response from singin: ", response);
      resetFormFields();
    } catch (error) {
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
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //オブジェクト要素を更新
  };

  return (
    <div className="sign-in-container">
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
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            G signin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
