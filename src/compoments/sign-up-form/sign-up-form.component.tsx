import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { SignupContainer } from "./sign-up-form.styles";

import { UserCredential } from "firebase/auth";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [field, setField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = field;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    } else {
      try {
        let user: UserCredential | undefined;
        {
          user = await createAuthUserWithEmailAndPassword(email, password);
        }

        await createUserDocumentFromAuth(user, { displayName });
        setField(defaultFormField); //フォームを初期化
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //オブジェクト要素を更新
  };
  return (
    <SignupContainer>
      <h2>Don't have an accont?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="displayName"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChanges,
            name: "displayName",
            value: displayName,
          }}
        />

        <FormInput
          label="email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChanges,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="passowrd"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChanges,
            name: "password",
            value: password,
          }}
        />

        <FormInput
          label="confirmPassword"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChanges,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <Button buttonType="base" type="submit">
          Sign up
        </Button>
      </form>
    </SignupContainer>
  );
};

export default SignUpForm;
