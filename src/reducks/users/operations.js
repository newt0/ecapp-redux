import { signInAction } from "./actions";
import { push } from "connected-react-router";

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = "https://api.github.com/users/newt0";

      const response = await fetch(url) // fetchは非同期処理だからawait必須
        .then((res) => res.json())
        .catch(() => null);

      const username = response.login;

      dispatch(
        signInAction({ isSignedIn: true, uid: "99999", username: username })
      );

      dispatch(push("/"));
    }
  };
};
