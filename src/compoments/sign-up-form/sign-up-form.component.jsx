import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [field, setField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = field;

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );

        setCurrentUser(user);
        await createUserDocumentFromAuth(user, { displayName });
        setField(defaultFormField); //フォームを初期化
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //オブジェクト要素を更新
  };
  return (
    <div className="sign-up-container">
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
        <Button buttonType="default" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
