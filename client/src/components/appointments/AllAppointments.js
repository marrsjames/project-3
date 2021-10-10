import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllDoctors } from '../../api/doctors.js'

const AllAppointments = ({ appointmentsList }) => {
  // console.log('list is', appointmentsList)
  const [doctors, setDoctors] = useState([])
  const [availableNames, setAvailableNames] = useState([])
  const [visibleName, setVisibleName] = useState(null)
  useEffect(() => {
    getAllDoctors().then((doctors) => setDoctors(doctors))
  }, [])

  appointmentsList.sort(
    (a, b) =>
      new Date(...a.date.split('/').reverse()) -
      new Date(...b.date.split('/').reverse())
  )

  useEffect(() => {
    const names = appointmentsList
      .map((appointment) => appointment.doctor)
      .filter((doctor) => doctor !== null)
    setAvailableNames([...new Set(names)])
  }, [appointmentsList])

  // console.log(
  //   appointmentsList.filter((appointment) =>
  //     console.log(appointment.doctor[0].name)
  //   )
  // )

  //console.log(doctors)
  doctors.map((doctor) => console.log(doctor.name))
  // availableNames.map((appointments) => console.log(appointments[0].name))
  // console.log(availableNames)
  // console.log('sorted list is ', sortedAppointments)
  return (
    <>
      {doctors.map((doctor) => (
        <button onClick={() => setVisibleName(doctor.name)}>
          {doctor.name}
        </button>
      ))}
      <button onClick={() => setVisibleName(null)}>Reset</button>
      <h1>appointments!</h1>
      {appointmentsList
        .filter(
          (appointment) =>
            !visibleName || appointment.doctor[0].name === visibleName
        )
        .map((appointment) => (
          <div key={appointment._id}>
            <h2>date and time: {appointment.date}</h2>
            <h2>Doctor: {appointment.doctor.map((doc) => doc.name)}</h2>
            <h2>Service: {appointment.service.map((ser) => ser.name)}</h2>
            <h2>Patient: {appointment.patient.map((pat) => pat.name)}</h2>
            <hr />
          </div>
        ))}
    </>
  )
}

export default AllAppointments
