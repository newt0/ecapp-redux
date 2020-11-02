import React from "react";
import { useSelector } from "react-redux";
import { getUserId, getUsername } from "../reducks/users/selectors";

const Home = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUsername(selector);
  return (
    <div>
      <h2>Home Page</h2>
      <p>{uid}</p>
      <p>{username}</p>
    </div>
  );
};

export default Home;
