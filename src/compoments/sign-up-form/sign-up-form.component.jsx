import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [field, setField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = field;

  // console.log("field: ", field);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    } else {
      createAuthUserWithEmailAndPassword(email, password)
        .then(async ({ user }) => {
          await createUserDocumentFromAuth(user, { displayName });
          setField(defaultFormField); //フォームを初期化
        })
        .catch((e) => {
          alert(`Failed with error code: ${e.code}`);
        });
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //オブジェクト要素を更新
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="displayName"
          inputOptions={{
            type: "text",
            required: true,
            onChange: { handleChanges },
            name: "displayName",
            value: displayName,
          }}
        />

        <FormInput
          label="email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: { handleChanges },
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="passowrd"
          inputOptions={{
            type: "password",
            required: true,
            onChange: { handleChanges },
            name: "password",
            value: password,
          }}
        />

        <FormInput
          label="confirmPassword"
          inputOptions={{
            type: "password",
            required: true,
            onChange: { handleChanges },
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <button>sign-in with email and password</button>
      </form>
    </div>
  );
};

export default SignUpForm;
