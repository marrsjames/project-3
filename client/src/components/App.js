import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Register from "../components/auth/register.js";
import Login from "../components/auth/login.js";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default App;
