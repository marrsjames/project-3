import axios from 'axios'
// import { getToken } from '../lib/auth'

export const getAllPatients = async () => {
  const options = { method: 'GET', url: '/api/patients' }

  const { data } = await axios.request(options)
  return data
}
