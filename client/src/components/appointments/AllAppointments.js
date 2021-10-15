import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllDoctors } from "../../api/doctors.js";
import { getAllPatients } from "../../api/PatientsApi.js";
import { getAllServices } from "../../api/ServicesApi.js";
import DatePicker from "react-datepicker";
import Moment from "moment";
import { useHistory } from "react-router";
import { getSingleAppointment } from "../../api/AppointmentsApi.js";

const AllAppointments = ({ appointmentsList }) => {
  const { id } = useParams();
  const history = useHistory();
  // console.log('list is', appointmentsList)
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [services, setServices] = useState([]);
  const [visibleDoctor, setVisibleDoctor] = useState(null);
  const [visiblePatient, setVisiblePatient] = useState(null);
  const [visibleService, setVisibleService] = useState(null);
  const [visibleDate, setVisibleDate] = useState();
  const [oneAppointment, setOneAppointment] = useState({ appt: null });
  useEffect(() => {
    getAllDoctors().then((doctors) => setDoctors(doctors));
    getAllPatients().then((patients) => setPatients(patients));
    getAllServices().then((services) => setServices(services));
  }, []);

  const getApptApi = async () => {
    try {
      const res = await getSingleAppointment(id);
      setOneAppointment({ appt: res.data });
    } catch (err) {
      console.error(`Error for finding ${id}`, err);
    }
  };

  useEffect(() => {
    getApptApi();
  }, []);

  console.log("state is", oneAppointment);

  appointmentsList.sort(
    (a, b) =>
      new Date(...a.date.split("/").reverse()) -
      new Date(...b.date.split("/").reverse())
  );

  useEffect(() => {
    appointmentsList
      .map((appointment) => appointment.doctor)
      .filter((doctor) => doctor !== null);
  }, [appointmentsList]);

  useEffect(() => {
    appointmentsList
      .map((appointment) => appointment.service)
      .filter((service) => service !== null);
  }, [appointmentsList]);

  useEffect(() => {
    appointmentsList
      .map((appointment) => appointment.patient)
      .filter((patient) => patient !== null);
  }, [appointmentsList]);

  const handleReset = () => {
    setVisibleDoctor(null);
    setVisibleService(null);
    setVisiblePatient(null);
    setVisibleDate(null);
  };

  // realised that this is less secure, need a direct link, and make it a secureRoute in App.js
  // const handleEditBtn = (event) => {
  //   event.preventDefault();

  //   try {
  //     history.push(`/appointments/${id}/edit`);
  //   } catch (error) {
  //     console.log("Error trying to edit appt", error);
  //   }
  // };

  console.log(
    appointmentsList.map((appt) => new Date(appt.date).getFullYear())
  );
  console.log(
    appointmentsList.map((appt) => Moment(appt.date).format("YYYY-MM-DD"))
  );

  console.log(Moment(visibleDate).format("YYYY-MM-DD"));
  return (
    <>
      <h1 className="title">All appointments</h1>
      <div className="buttons">
        {doctors.map((doctor) => (
          <button
            className="button is-info is-small"
            key={doctor._id}
            onClick={() => setVisibleDoctor(doctor.name)}
          >
            {doctor.name}
          </button>
        ))}
        <button
          className="button is-warning is-small"
          onClick={() => setVisibleDoctor(null)}
        >
          Reset Doctors filter
        </button>
        <p>Current Doctor filter: {visibleDoctor}</p>
      </div>
      <div className="buttons">
        {services.map((service) => (
          <button
            className="button is-info is-small"
            key={service._id}
            onClick={() => setVisibleService(service.name)}
          >
            {service.name}
          </button>
        ))}
        <button
          className="button is-warning is-small"
          onClick={() => setVisibleService(null)}
        >
          Reset Services filter
        </button>
        <p>Current Service filter: {visibleService}</p>
      </div>
      <div className="buttons">
        {patients.map((patient) => (
          <button
            className="button is-info is-small"
            key={patient._id}
            onClick={() => setVisiblePatient(patient.name)}
          >
            {patient.name}
          </button>
        ))}
        <button
          className="button is-warning is-small"
          onClick={() => setVisiblePatient(null)}
        >
          Reset Services filter
        </button>
        <p>Current Service filter: {visiblePatient}</p>
      </div>
      <div className="buttons">
        <DatePicker
          selected={visibleDate}
          onChange={(date) => setVisibleDate(date)}
        />
        <button
          className="button is-warning is-small"
          onClick={() => setVisibleDate(null)}
        >
          Reset Date filter
        </button>
        <p>Current Date filter: {visibleDate?.toLocaleDateString()}</p>
      </div>
      <button className="button is-warning is-small" onClick={handleReset}>
        Reset all filters
      </button>
      {appointmentsList
        .filter(
          (appointment) =>
            !visibleDoctor || appointment.doctor[0].name === visibleDoctor
        )
        .filter(
          (appointment) =>
            !visibleService || appointment.service[0].name === visibleService
        )
        .filter(
          (appointment) =>
            !visiblePatient || appointment.patient[0].name === visiblePatient
        )
        .filter(
          (appointment) =>
            !visibleDate ||
            Moment(appointment.date).format("YYYY-MM-DD") ===
              Moment(visibleDate).format("YYYY-MM-DD")
        )
        .map((appointment) => (
          <div key={appointment._id}>
            <h2>date and time: {appointment.date}</h2>
            <h2>Doctor: {appointment.doctor.map((doc) => doc.name)}</h2>
            <h2>Service: {appointment.service.map((ser) => ser.name)}</h2>
            <h2>Patient: {appointment.patient.map((pat) => pat.name)}</h2>
            {/* <button className="button" onClick={handleEditBtn}>
              Edit Appointment
            </button> */}
            <Link
              to={`/appointments/${appointment._id}/edit`}
              className="button is-warning"
            >
              Update Appointment
            </Link>
            <hr />
          </div>
        ))}
    </>
  );
};

export default AllAppointments;
