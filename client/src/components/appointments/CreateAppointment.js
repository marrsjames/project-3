import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Appointment from '../../../../models/appointment'
import { createAppointment } from '../../api/AppointmentsApi.js'
import { getAllDoctors } from '../../api/DoctorsApi.js'
import { getAllPatients } from '../../api/PatientsApi.js'
import { getAllServices } from '../../api/ServicesApi.js'

const AppointmentNew = () => {
  const history = useHistory()
  const [doctors, setDoctors] = useState([])
  const [patients, setPatients] = useState([])
  const [services, setServices] = useState([])
  const [state, setState] = useState({
    formData: {
      date: '',
      service: '',
      doctor: '',
      patient: '',
    },
  })

  useEffect(() => {
    getAllDoctors().then((doctors) => setDoctors(doctors))
  }, [])
  useEffect(() => {
    getAllPatients().then((patients) => setPatients(patients))
  }, [])
  useEffect(() => {
    getAllServices().then((services) => setServices(services))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log(state.formData)
      const result = createAppointment(state.formData)
      console.log(result)
      history.push('/appointments')
    } catch (err) {
      console.log('error creating appointment', err)
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    const formData = {
      ...state.formData,
      [name]: value,
    }
    setState({ formData })
  }

  return (
    <section>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Description</label>
              <div>
                <textarea
                  placeholder='Type in date'
                  name='date'
                  value={state.formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <select
              name='doctor'
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
              defaultValue={services[0].id}
              name='service'
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
              name='patient'
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
              <input type='submit' value='Create appointment' />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AppointmentNew
