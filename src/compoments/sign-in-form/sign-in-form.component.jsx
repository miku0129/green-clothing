import { useState } from "react";
import FormInput from "../form-input/form-input.component";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [field, setField] = useState(defaultFormField);
  const { email, password } = field;

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //オブジェクト要素を更新
  };

  return (
    <div>
      <h2>Already have an account</h2>
      <form>
        <FormInput
          label="email"
          inputOptions={{
            type: "text",
            required: true,
            onChange: { handleChanges },
            name: "email",
            value: email,
          }}
        />
      </form>
    </div>
  );
};

export default SignInForm;
