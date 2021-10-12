import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllAppointments from "../components/appointments/AllAppointments.js";
import CreateAppointment from "../components/appointments/CreateAppointment.js";
import Register from "../components/auth/register.js";
import Login from "../components/auth/login.js";
import Home from "../components/common/Home.js";
import "../styles/styles.scss";
//import AllDoctors from "./doctors/AllDoctors";
import NavBar from "./common/NavBar.js";
import DoctorsCharacterCard from "../doctors/DoctorsCharacterCard";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/doctors" component={DoctorsCharacterCard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/appointments" component={AllAppointments} />
        <Route exact path="/newappointment" component={CreateAppointment} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
