import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [field, setField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = field;

  console.log("field: ", field);

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    //password match
    //search user in auth
    //create new user
  }

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //便利
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChanges}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChanges}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChanges}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChanges}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default SignUpForm;
