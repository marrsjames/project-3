import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllAppointments } from '../../api/AppointmentsApi'

const AllAppointments = () => {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    getAllAppointments().then((appointments) => setAppointments(appointments))
  }, [])

  console.log(appointments)

  return (
    <>
      <h1>appointments!</h1>
      {appointments.map((appointment) => (
        <div key={appointment._id}>
          <h2>date and time: {appointment.date}</h2>
          <h2>Doctor: {appointment.doctor.map((doc) => doc.name)}</h2>
          <h2>Service: {appointment.service.map((ser) => ser.name)}</h2>
          <h2>Patient: {appointment.patient.map((pat) => pat.name)}</h2>
        </div>
      ))}
    </>
  )
}

export default AllAppointments
