import React, { useState, useEffect } from "react";
import { getAllDoctors } from "../../api/doctors.js";
import { getAllPatients } from "../../api/PatientsApi.js";
import { getAllServices } from "../../api/ServicesApi.js";
import { editAppointment } from "../../api/AppointmentsApi";
import { useHistory, useParams } from "react-router";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

const EditAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const history = useHistory();
  const { id } = useParams();

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

  const [apptForm, setApptForm] = useState({
    formData: {
      date: setHours(setMinutes(new Date(), 30), 16),
      service: "",
      doctor: "",
      patient: "",
    },
  });

  const pushAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await editAppointment(id, apptForm.formData);
      pushAppointment(res.data);
      history.push("/appointments");
    } catch (error) {
      console.log("Error updating appointment", error);
    }
  };

  const updateFormData = (name, value) => {
    const formData = {
      ...apptForm.formData,
      [name]: value,
    };
    setApptForm({ formData });
  };

  const appendFormData = (newFormData) => {
    const formData = {
      ...apptForm.formData,
      ...newFormData,
    };
    setApptForm({ formData });
  };

  const handleChange = (event) => {
    updateFormData(event.target.name, event.target.value);
  };

  const appointmentDates = appointments.map(
    (appointment) => new Date(appointment.date)
  );

  return (
    <section>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Description</label>
            </div>
            <DatePicker
              selected={apptForm.formData.date}
              onChange={(date) => updateFormData("date", date)}
              showTimeSelect
              dateFormat="Pp"
            />

            <select
              name="doctor"
              value={apptForm.formData.doctor}
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
              value={apptForm.formData.service}
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
              value={apptForm.formData.patient}
              onChange={handleChange}
            >
              {patients.map((patient) => (
                <option value={patient._id} key={patient._id}>
                  {patient.name}
                </option>
              ))}
            </select>
            <div>
              <input type="submit" value="Update appointment" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditAppointment;
