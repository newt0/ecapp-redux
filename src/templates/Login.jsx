import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { signInAction } from "../reducks/users/actions";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Login Page</h2>
      <button
        onClick={() => {
          dispatch(signInAction({ uid: "777", username: "MUZAN" }));
          dispatch(push("/"));
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
