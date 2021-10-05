import axios from 'axios'
// import { getToken } from '../lib/auth'

export const getAllDoctors = async () => {
  const options = { method: 'GET', url: '/api/doctors' }

  const { data } = await axios.request(options)
  return data
}
