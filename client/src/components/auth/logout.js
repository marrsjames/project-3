import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { removeToken } from "../../api/token.js";

const Logout = ({ callback }) => {
  const history = useHistory();

  useEffect(() => {
    removeToken();
    callback();
    history.goBack();
  });

  return <h1>You have successfully logged out. Have a lovely day.</h1>;
};

export default Logout;
