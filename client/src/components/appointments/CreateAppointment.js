import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
//import Appointment from '../../../../models/appointment'
import { createAppointment } from "../../api/AppointmentsApi.js";
import { getAllDoctors } from "../../api/doctors.js";
import { getAllPatients } from "../../api/PatientsApi.js";
import { getAllServices } from "../../api/ServicesApi.js";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentNew = ({ pushAppointment, appointmentsList }) => {
  const history = useHistory();
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [services, setServices] = useState([]);
  // console.log('list is', appointmentsList)

  // {
  //   appointmentsList.map((appointment) =>
  //     appointment.date.map((date) => console.log(date))
  //   )
  // }

  useEffect(() => {
    getAllDoctors().then((doctors) => {
      setDoctors(doctors);
    });
    getAllPatients().then((patients) => {
      setPatients(patients);
    });
    getAllServices().then((services) => {
      setServices(services);
    });
  }, []);

  useEffect(() => {
    appendFormData({
      service: services[0]?._id,
      doctor: doctors[0]?._id,
      patient: patients[0]?._id,
    });
  }, [doctors, patients, services]);

  const [state, setState] = useState({
    formData: {
      date: setHours(setMinutes(new Date(), 30), 16),
      service: "",
      doctor: "",
      patient: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log('state.formData', state.formData)
      const result = await createAppointment(state.formData);
      // console.log('result is ', result.data)
      // console.log(state.formData)
      //console.log('result.data', result.data)
      pushAppointment(result.data);
      history.push("/appointments");
    } catch (err) {
      console.log("error creating appointment", err);
    }
  };

  const updateFormData = (name, value) => {
    const formData = {
      ...state.formData,
      [name]: value,
    };
    console.log({ formData });
    setState({ formData });
  };

  const appendFormData = (newFormData) => {
    const formData = {
      ...state.formData,
      ...newFormData,
    };
    // console.log({ formData })
    setState({ formData });
  };

  const handleChange = (e) => {
    updateFormData(e.target.name, e.target.value);
  };

  const appointmentDates = appointmentsList.map(
    (appointment) => new Date(appointment.date)
  );

  // const firstDate = new Date(appointmentDates[0])
  // console.log(firstDate.getHours())
  console.log(appointmentDates);

  //if
  {
    appointmentDates.map((appointment) =>
      console.log(
        appointment.getDate(),
        appointment.getMonth(),
        appointment.getFullYear(),
        appointment.getHours(),
        appointment.getMinutes()
      )
    );
  }
  return (
    <section>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Description</label>
            </div>
            <DatePicker
              selected={state.formData.date}
              onChange={(date) => updateFormData("date", date)}
              showTimeSelect
              dateFormat="Pp"
              //date picjer then time picker
              // pick date then excluded times are taken from that
              // excludeTimes={[
              //   setHours(setMinutes(new Date(), 0), 13),
              //   setHours(setMinutes(new Date(), 30), 18),
              //   setHours(setMinutes(new Date(), 30), 19),
              //   setHours(setMinutes(new Date(), 30), 17),
              // ]}
              // minTime={setHours(setMinutes(new Date(), 0), 9)}
              // maxTime={setHours(setMinutes(new Date(), 0), 17)}
            />

            <select
              name="doctor"
              value={state.formData.doctor}
              onChange={handleChange}
            >
              {doctors.map((doctor) => (
                <option value={doctor._id} key={doctor._id}>
                  {doctor.name}
                </option>
              ))}
            </select>
            <select
              name="service"
              value={state.formData.service}
              onChange={handleChange}
            >
              {services.map((service) => (
                <option value={service._id} key={service._id}>
                  {service.name}
                </option>
              ))}
            </select>
            <select
              name="patient"
              value={state.formData.patient}
              onChange={handleChange}
            >
              {patients.map((patient) => (
                <option value={patient._id} key={patient._id}>
                  {patient.name}
                </option>
              ))}
            </select>
            <div>
              <input type="submit" value="Create appointment" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentNew;
