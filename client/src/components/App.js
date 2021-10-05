import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Register from "../components/auth/register.js";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/register" component={Register} />;
    </BrowserRouter>
  );
};

export default App;
