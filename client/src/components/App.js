import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/styles.scss";
import AllDoctors from "./AllDoctors.js";

const App = () => (
  <BrowserRouter>
    <h1>Hello Antony and James.</h1>
    <Switch>
      <Route path="/doctors" component={AllDoctors} />
    </Switch>
  </BrowserRouter>
);
export default App;
