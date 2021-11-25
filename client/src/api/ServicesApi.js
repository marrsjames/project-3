import axios from 'axios'
// import { getToken } from '../lib/auth'

export const getAllServices = async () => {
  const options = { method: 'GET', url: '/api/services' }

  const { data } = await axios.request(options)
  return data
}
