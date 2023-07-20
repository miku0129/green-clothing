import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  signInWithEmailAndPasswordInput,
  auth,
  watchOnAuthStateChanged,
} from "../../utils/firebase/firebase.utils";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [field, setField] = useState(defaultFormField);
  const { email, password } = field;

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPasswordInput(auth, email, password);
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //オブジェクト要素を更新
  };

  return (
    <div>
      <h2>Already have an account</h2>
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
        <Button buttonType="default" type="submit">
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
