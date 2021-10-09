import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllAppointments from "../components/appointments/AllAppointments.js";
import CreateAppointment from "../components/appointments/CreateAppointment.js";
import Register from "../components/auth/register.js";
import Login from "../components/auth/login.js";
import Home from "../components/common/Home.js";
import "../styles/styles.scss";
import AllDoctors from "./doctors/AllDoctors.js";
import NavBar from "./common/NavBar.js";
import About from "../components/common/About.js";
import Covid from "./coronavirus/covid.js";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/coronavirus" component={Covid} />
        <Route path="/doctors" component={AllDoctors} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/appointments" component={AllAppointments} />
        <Route exact path="/newappointment" component={CreateAppointment} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
