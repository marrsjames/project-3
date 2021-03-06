import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllAppointments from "../components/appointments/AllAppointments.js";
import CreateAppointment from "../components/appointments/CreateAppointment.js";
import Register from "../components/auth/register.js";
import Login from "../components/auth/login.js";
import Home from "../components/common/Home.js";
import "../styles/styles.scss";
import NavBar from "./common/NavBar.js";
import About from "../components/common/About.js";
import Covid from "./coronavirus/covid.js";
import { getAllAppointments } from "../api/AppointmentsApi.js";
import { isLoggedIn } from "../api/token.js";
import Logout from "./auth/logout.js";
import DoctorsCharacterCard from "../doctors/DoctorsCharacterCard";
import EditAppointment from "../components/appointments/EditAppointment";
import Footer from "./common/Footer.js";
//import DoctorsCharacterCard2 from "../doctors/DoctorsCharacterCard2";

const App = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAllAppointments().then((appointments) => setAppointments(appointments));
  }, []);

  const listToAppointments = () => {
    return <AllAppointments appointmentsList={appointments} />;
  };

  const pushAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const element2 = () => {
    return (
      <CreateAppointment
        pushAppointment={pushAppointment}
        appointmentsList={appointments}
      />
    );
  };

  // const UpdateAppointment = () => {
  //   return (
  //     <EditAppointment
  //       pushAppointment={pushAppointment}
  //       appointmentsList={appointments}
  //     />
  //   );
  // };

  // this here will help with navbar re: what's viewable when logged in.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar isAuthenticated={isAuthenticated} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/appointments" component={listToAppointments} />
        <Route exact path="/newappointment" component={element2} />
        <Route path="/about" component={About} />
        <Route path="/coronavirus" component={Covid} />
        <Route path="/doctors" component={DoctorsCharacterCard} />
        <Route path="/register" component={Register} />
        <Route
          path="/login"
          component={() => <Login callback={() => setIsAuthenticated(true)} />}
        />
        <Route
          path="/logout"
          component={() => (
            <Logout callback={() => setIsAuthenticated(false)} />
          )}
        />
        <Route path="/appointments/:id/edit" component={EditAppointment} />
        <Footer />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
