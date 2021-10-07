import axios from 'axios'
// import { getToken } from '../lib/auth'

export const getAllAppointments = async () => {
  const options = { method: 'GET', url: '/api/appointments' }

  const { data } = await axios.request(options)
  return data
}

export const createAppointment = (formData) => {
  const options = {
    method: 'POST',
    data: formData,
    url: '/api/appointments',
    // headers: { Authorization: `Bearer ${getToken()}` },
  }
  return axios(options)
}
