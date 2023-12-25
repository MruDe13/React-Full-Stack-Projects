import { useState } from "react";
import FormInput from "../form-input/form.input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultSignInFormFields = {
  userEmail: "",
  userPassword: "",
};

const SignInForm = () => {
  const [signInFormFields, setSignInFormFields] = useState(
    defaultSignInFormFields
  );
  const { userEmail, userPassword } = signInFormFields;

  const resetFormFields = () => {
    setSignInFormFields(defaultSignInFormFields);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignInFormFields({ ...signInFormFields, [name]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        userEmail,
        userPassword
      );
      console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Password doesn't match!");
          break;
        case "auth/invalid-email":
          alert("No user has been created with this Email!");
          break;
        default:
          console.log(error.code);
          break;
      }
    }

    resetFormFields();
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span> Sign in with your Email and Password </span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          type="text"
          required
          name="userEmail"
          value={userEmail}
          onChange={onChangeHandler}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="userPassword"
          value={userPassword}
          onChange={onChangeHandler}
        />
        <div className="buttons-container">
          <Button buttonText="Sign In" buttonType="submit" />
          <Button
            buttonStyle="google-sign-in"
            buttonText="Sign In with Google"
            onClickHandler={logGoogleUser}
            buttonType="button"
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
