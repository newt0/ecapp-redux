import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput } from "../components/UIkit";
import PrimaryButton from "../components/UIkit/PrimaryButton";
import { signIn } from "../reducks/users/operations";
import { push } from "connected-react-router";

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <div className="c-section-container">
      <h2 className="u-text-center u-text__headline">Sign In</h2>
      <div className="module-spacer--medium" />

      <TextInput
        fullWidth={true}
        label={"Mail Address"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <TextInput
        fullWidth={true}
        label={"Password"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />

      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton
          label={"Sign In"}
          onClick={() => dispatch(signIn(email, password))}
        />
        <div className="module-spacer--medium" />
        <p onClick={() => dispatch(push("/signup"))}>
          To register account here
        </p>
        <p onClick={() => dispatch(push("/signin/reset"))}>
          To reset the password here
        </p>
      </div>
    </div>
  );
};

export default SignIn;
